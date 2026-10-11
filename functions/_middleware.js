export async function onRequest(context) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  if (pathname === "/google4051fa9c42ac17ab.html" || pathname === "/google4051fa9c42ac17ab") {
    return new Response("google-site-verification: google4051fa9c42ac17ab.html", {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-cache, no-store, must-revalidate",
      },
    });
  }

  return context.next();
}
