import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are a helpful assistant for Grace Huang's personal portfolio website. 
Answer questions about Grace based on the following information:

- She is currently attending Washington Univerisity in St. Louis, pursuing a degree in Computer Science + Math and graduating in May 2026.
- She is an incoming Software Engineer 1 at Mastercard starting August 2026
- Previous experience: Software Engineer Intern at Mastercard (June-August 2025), 
  Software Engineer Intern at Principal Financial Group (May-August 2024),
  Undergraduate Research Assistant and Teaching Assistant at Washington University
- At Mastercard, she designed a new data pipeline to deliever structured billing feeds
- At Principal, she built and tested dozens of reusable web components for a design system team
- At Washington University, she was a TA for three courses (Object oriented programming, discrete math, and data structures & algorithms)
- As an undergraduate research assistant, she built a full stack GUI using Python and Flask to allow lab members to interact with several lab instruments all at once. She also automated an optical fiber alignment process using the Nelder Mead optimization algorithm.
- She has interests in design, machine learning, and full-stack development
- She loves traveling, trying new foods, spending time with friends and family, and playing pickleball
- She was a performer for a traditional Filipino dance called Tinikling in college
- Projects: Leftover to Makeover (recipe recommendation app), ARCH Ship (art packing calculator), Spotify Dashboard & Playlist Generator, Toast It!
- Contact: linkedin.com/in/gracehjy, github.com/gracehjy, grace.h@wustl.edu

Only answer questions about Grace. If asked something unrelated, politely redirect.
Keep answers concise and friendly. Take on the speaking language of a recent college student.`

const MODEL_NAME = "gemini-2.5-flash"; 

export default function Chat() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (open) {
            scrollToBottom();
        }
    }, [messages, open]);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userMessage = { role: "user", content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
                        contents: updatedMessages.map(m => ({
                            role: m.role === "assistant" ? "model" : "user",
                            parts: [{ text: m.content }]
                        }))
                    })
                }
            );

            const data = await response.json();

            if (data.candidates && data.candidates[0]) {
                const text = data.candidates[0].content.parts[0].text;
                setMessages([...updatedMessages, { role: "assistant", content: text }]);
            } else {
                console.error("Gemini API Error:", data);
                const apiError = data.error?.message || "I'm having trouble connecting right now.";
                setMessages([...updatedMessages, { role: "assistant", content: `(Error: ${apiError})` }]);
            }
        } catch (err) {
            console.error("Network or Script Error:", err);
            setMessages([...updatedMessages, { role: "assistant", content: "Sorry, something went wrong. Please try again!" }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end sm:bottom-6 sm:right-6 font-sans">
            {open && (
                <div className="mb-4 flex w-[min(20rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-stone-300 bg-[#F4F0EB] shadow-lg sm:w-80">
                    <div className="px-4 py-3 border-b border-stone-300">
                        <p className="text-sm font-bold">ask me anything</p>
                        <p className="text-xs text-stone-400">about grace</p>
                    </div>

                    <div className="flex flex-col gap-3 p-4 h-72 overflow-y-auto">
                        {messages.length === 0 && (
                            <p className="text-xs text-stone-400 text-center mt-8">
                                ask me about grace's experience, projects, or background!
                            </p>
                        )}
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <p className={`text-xs px-3 py-2 rounded-xl max-w-[85%] leading-relaxed ${
                                    msg.role === "user"
                                        ? "bg-stone-700 text-stone-100"
                                        : "bg-stone-200 text-stone-800"
                                }`}>
                                    {msg.content}
                                </p>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <p className="text-xs px-3 py-2 rounded-xl bg-stone-200 text-stone-400">
                                    thinking...
                                </p>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="flex gap-2 p-3 border-t border-stone-300">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="ask a question..."
                            className="flex-1 text-xs bg-stone-100 rounded-lg px-3 py-2 outline-none border border-stone-200 focus:border-stone-400"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading}
                            className="cursor-pointer text-xs bg-[#333] text-stone-100 px-3 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                            send
                        </button>
                    </div>
                </div>
            )}

            <button
                onClick={() => setOpen(!open)}
                className="cursor-pointer w-12 h-12 bg-[#333] text-stone-100 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg text-lg"
            >
                {open ? "×" : "💬"}
            </button>
        </div>
    );
}