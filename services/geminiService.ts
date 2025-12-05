import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

// Initialize the client only when needed to ensure environment variables are loaded
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is missing. Gemini features will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async () => {
  const ai = getClient();
  if (!ai) throw new Error("API Key missing");

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the Virtual Consultant for Pentagon UK, a premier Residential & Commercial Property Management firm in the United Kingdom. 
      Your tone is Authoritative, Secure, Transparent, and Efficient.
      
      Key Information about Pentagon UK:
      - We operate in London and Nationwide.
      - We specialize in Block Management, Commercial Asset Management, and Right to Manage (RTM).
      - Our visual identity is geometric precision, trust, and slate/navy aesthetics.
      - We prioritize safety compliance (Building Safety Act 2022) and financial transparency.
      
      Do not provide legal or financial advice, but guide users to our Contact section for specific inquiries. 
      Keep answers concise and professional.
      If asked about pricing, state that we offer bespoke quotes based on property size and complexity.`,
    }
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }
  
  if (!chatSession) {
     return "I apologize, but I am currently unable to connect to the server. Please contact our office directly.";
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "I processed that, but have no response text.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered an error processing your request. Please try again or contact support.";
  }
};