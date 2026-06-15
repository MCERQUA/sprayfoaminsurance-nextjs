exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body).payload;
    await fetch('https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=sprayfoaminsurance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    console.error('webhook error', e);
  }
  return { statusCode: 200 };
};
