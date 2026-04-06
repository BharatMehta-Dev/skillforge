import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1"
});

// 🔥 Skill Analyzer
app.post("/analyze-skill", async (req, res) => {
  const { skill } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "openai/gpt-4o-mini",
      messages: [
        { role: "system", content: "Analyze skill with difficulty, time, roadmap." },
        { role: "user", content: skill }
      ]
    });

    res.json({ result: response.choices[0].message.content });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔥 Gap Analyzer
app.post("/analyze-gap", async (req, res) => {
  const { current, target } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Find skill gaps and roadmap." },
        { role: "user", content: `Current: ${current}, Target: ${target}` }
      ]
    });

    res.json({ result: response.choices[0].message.content });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});

// 🔥 AI PLANNER
app.post("/generate-plan", async (req, res) => {
  const { skill } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Create a structured weekly roadmap with tasks."
        },
        {
          role: "user",
          content: `Create a learning roadmap for ${skill}`
        }
      ]
    });

    res.json({ result: response.choices[0].message.content });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});