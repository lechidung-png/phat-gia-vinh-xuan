/**
 * zenAudio.ts
 * Bộ tạo âm thanh thiền đan điền bằng Web Audio API thuần (Synthesizer).
 * Không phụ thuộc tệp âm thanh ngoài, hoàn toàn hoạt động offline 100%, không bị 404.
 * Giúp võ sinh điều hòa hơi thở đan điền và định tâm theo nhịp chuyển thế võ.
 */

class ZenAudioEngine {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("pgvx_zen_audio_enabled");
      this.soundEnabled = saved === "true";
    }
  }

  private initContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public isEnabled(): boolean {
    return this.soundEnabled;
  }

  public toggle(): boolean {
    this.soundEnabled = !this.soundEnabled;
    if (typeof window !== "undefined") {
      localStorage.setItem("pgvx_zen_audio_enabled", String(this.soundEnabled));
    }
    if (this.soundEnabled) {
      this.initContext();
      this.playSingingBowl(528); // Tần số năng lượng phục hồi
    }
    return this.soundEnabled;
  }

  public setEnabled(enabled: boolean): void {
    this.soundEnabled = enabled;
    if (typeof window !== "undefined") {
      localStorage.setItem("pgvx_zen_audio_enabled", String(enabled));
    }
    if (enabled) {
      this.initContext();
    }
  }

  /**
   * Tiếng chuông xoay thiền Tây Tạng / Nam Thiếu Lâm (Singing Bowl)
   * Dao động tần số hài âm ấm áp, decay dài êm dịu giúp tĩnh tâm đan điền.
   */
  public playSingingBowl(freq = 432): void {
    if (!this.soundEnabled) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.2, now);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);
      masterGain.connect(ctx.destination);

      // 1. Âm cơ bản (Fundamental tone)
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(freq, now);
      osc1.connect(masterGain);

      // 2. Hài âm 1 (Harmonic overtone - Quãng 5)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      gain2.gain.setValueAtTime(0.3, now);
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(freq * 1.5, now);
      osc2.connect(gain2);
      gain2.connect(masterGain);

      // 3. Hài âm 2 (Octave shimmer)
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      gain3.gain.setValueAtTime(0.15, now);
      osc3.type = "sine";
      osc3.frequency.setValueAtTime(freq * 2.02, now); // Slightly detuned for rich shimmer
      osc3.connect(gain3);
      gain3.connect(masterGain);

      osc1.start(now);
      osc2.start(now);
      osc3.start(now);

      osc1.stop(now + 3.2);
      osc2.stop(now + 3.2);
      osc3.stop(now + 3.2);
    } catch {
      // AudioContext policy safe fallback
    }
  }

  /**
   * Tiếng mõ gỗ đan điền nhẹ (Zen Wood Block)
   * Nhịp gõ trầm ấm mô phỏng tiếng điểm huyệt và chuyển động tác.
   */
  public playWoodBlock(): void {
    if (!this.soundEnabled) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Bandpass filter tạo chất gỗ
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(600, now);
      filter.Q.setValueAtTime(3, now);

      osc.type = "triangle";
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch {
      // AudioContext policy safe fallback
    }
  }
}

export const zenAudio = new ZenAudioEngine();
