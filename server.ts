import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Gemini API Proxy Route
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        console.error("Chat Error: GEMINI_API_KEY is missing");
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
      }

      console.log("Sending prompt to Gemini...");
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const prompt = `
        You are Tania, the AI Assistant for "SNGO Creations", a high-end VFX, Motion Design, and AI studio.
        Your tone is premium, professional, and creative.
        Studio Services: VFX, Motion Graphics, AI Visuals, Commercials, Color Grading.
        
        The user asked: ${message}
        
        Please provide a concise, helpful response. If they want to start a project, tell them to fill out the contact form below or visit the Contact section.
      `;

      // Using gemini-flash-latest which is often more stable in these environments
      const response = await ai.models.generateContent({
        model: "gemini-flash-latest",
        contents: prompt,
      });

      console.log("Gemini response received successfully");
      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error Detail:", error);
      res.status(error?.status || 500).json({ 
        error: error?.message || "Failed to generate content",
        details: error?.statusText || undefined
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
