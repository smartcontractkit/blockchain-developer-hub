export default async function handler(_, res) {
  const { NEXT_HUBSPOT_API_KEY, NEXT_HUBSPOT_API_URL } = process.env;

  if (NEXT_HUBSPOT_API_KEY && NEXT_HUBSPOT_API_URL) {
    res.status(200).send({ hasEnv: true });
  } else {
    res.status(404).send({ hasEnv: false });
  }
}
