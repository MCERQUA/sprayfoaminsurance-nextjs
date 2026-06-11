// Netlify auto-triggers this function on every verified form submission.
// Forwards the lead to the Social Dashboard webhook → Neon DB → Zapier → AgencyZoom → AMS360.
// Pipeline + canonical field names documented in /workspace/docs/WEBHOOK-DATAPOINTS.md.
const WEBHOOK_URL = "https://social.jam-bot.com/api/leads/webhook/netlify?tenant=josh&site=sprayfoaminsurance";

export default async (req) => {
  try {
    const body = await req.json();
    const { payload } = body;

    if (!payload) {
      return new Response("No payload", { status: 400 });
    }

    // Forward the full Netlify form payload to the lead webhook
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        form_name: payload.form_name,
        data: payload.data,
        created_at: payload.created_at,
        site_url: payload.site_url,
        form_id: payload.form_id,
      }),
    });

    if (!response.ok) {
      console.error(`Webhook failed: ${response.status} ${await response.text()}`);
      return new Response("Webhook forwarding failed", { status: 502 });
    }

    console.log(`Lead forwarded: form=${payload.form_name}, email=${payload.data?.email || "n/a"}`);
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("submission-created error:", error);
    return new Response("Internal error", { status: 500 });
  }
};

export const config = {
  path: "/.netlify/functions/submission-created",
};
