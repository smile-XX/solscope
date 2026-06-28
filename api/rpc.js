export default async function handler(req, res) {
  const body = req.body;
  
  const response = await fetch(
    `https://mainnet.helius-rpc.com/?api-key=${process.env.HELIUS_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }
  );
  
  const data = await response.json();
  res.status(200).json(data);
}
