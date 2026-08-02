// Netlify Forms → lead pipeline bridge.
//
// Fires on the `submission-created` event for every registered form
// (quote, quote-detailed, vegas-quote-request — see public/__forms.html).
//
// Shape matters. Netlify sends a WRAPPER:
//   { payload: { form_name, created_at, data: { name, email, ... }, ... } }
// The pipeline expects the submitted fields FLAT, with a top-level `name`.
// Forwarding the wrapper (the previous behaviour) delivered a body with no
// top-level `name`, so every lead through this path landed nameless.
//
// The person's name is always a single `name` field — see the note in
// public/__forms.html.

const WEBHOOK =
  'https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=sprayfoaminsurance';

exports.handler = async (event) => {
  let payload;
  try {
    payload = JSON.parse(event.body).payload;
  } catch (e) {
    console.error('submission-created: unparseable event body', e);
    return { statusCode: 400, body: 'invalid event body' };
  }

  const data = (payload && payload.data) || {};

  // Flatten: submitted fields at the top level, submission metadata alongside.
  const body = {
    ...data,
    form_name: payload.form_name,
    submitted_at: payload.created_at,
    netlify_submission_id: payload.id,
  };
  delete body['bot-field'];

  try {
    const res = await fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      // Non-2xx must NOT look like success — a swallowed failure is a lost lead
      // with no signal. Netlify logs the non-200 and surfaces it in the
      // function log / alerting.
      console.error(
        `submission-created: webhook rejected lead (form=${payload.form_name}, ` +
        `submission=${payload.id}, status=${res.status}) ${text}`,
      );
      return { statusCode: 502, body: `webhook rejected: ${res.status}` };
    }
  } catch (e) {
    console.error(
      `submission-created: webhook unreachable (form=${payload.form_name}, ` +
      `submission=${payload.id})`,
      e,
    );
    return { statusCode: 502, body: 'webhook unreachable' };
  }

  return { statusCode: 200, body: 'ok' };
};
