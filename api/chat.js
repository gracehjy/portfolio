export default async function handler(req, res) {
  const { messages, system_instruction } = req.body;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ system_instruction, contents: messages }),
    }
  );

  const data = await response.json();
  res.json(data);
}