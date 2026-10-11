export async function onRequest() {
  return new Response("google-site-verification: google4051fa9c42ac17ab.html", {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-cache, no-store, must-revalidate",
    },
  });
}
