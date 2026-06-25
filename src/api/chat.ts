export type ChatMessage = {
  role: "user" | "bot";
  text: string;
};

type GeminiPart = {
  text?: string;
};

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: GeminiPart[];
    };
  }>;
  error?: {
    message?: string;
  };
};

export class ChatApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "ChatApiError";
    this.status = status;
  }
}

const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.0-flash";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const companyTraining = `
You are the AI Solution website assistant.
Company name: AI Solution.
AI Solution helps businesses add practical AI features to products they already use, including chatbots, automation, recommendation systems, analytics, document intelligence, and workflow copilots.
AI Solution also creates complete AI-first products from strategy and UX through model integration, deployment, and continuous improvement.
Current public services: Web Development, Mobile App Development, Cloud Solutions, and AI & Machine Learning. There are 4 services listed on the website.
Speak clearly, be helpful, and guide visitors toward services, projects, or contacting the company.
Do not invent pricing, contracts, addresses, or private details. If a visitor asks for specifics that are not provided, suggest contacting AI Solution.
`;

export async function sendChatMessage(messages: ChatMessage[]): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error("Missing VITE_GEMINI_API_KEY in the environment.");
  }

  const contents = messages
    .filter(
      (message) =>
        !message.text.startsWith("Hi, I am the AI Solution assistant.")
    )
    .slice(-6)
    .map((message) => ({
      role: message.role === "bot" ? "model" : "user",
      parts: [{ text: message.text }],
    }));

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: companyTraining }],
        },
        contents,
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 300,
        },
      }),
    }
  );

  const data = (await response.json()) as GeminiResponse;

  if (!response.ok) {
    throw new ChatApiError(
      data.error?.message || "Gemini could not answer right now.",
      response.status
    );
  }

  const text = data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text)
    .filter(Boolean)
    .join("\n")
    .trim();

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  return text;
}
