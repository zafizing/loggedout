"use client";

import { useState } from "react";

export default function WritePage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function cleanSentence(sentence: string) {
    const trimmed = sentence.trim();
    if (!trimmed) return "";
    return trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
  }

  function generateTombstone() {
    if (!text.trim()) return;

    const sentences = text
      .split(".")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const first = cleanSentence(sentences[0] || "tried to matter");
    const second = cleanSentence(
      sentences[1] || "believed something extraordinary was about to happen"
    );

    setResult(
      `Here lies someone who ${first}, ${second}, and quietly became another unfinished ambition archived by time.`
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      {!result ? (
        <>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Describe yourself.
          </h1>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write at least 2–5 sentences about yourself."
            className="w-full max-w-2xl h-48 bg-gray-900 border border-gray-700 p-4 rounded-lg mb-6 focus:outline-none focus:border-white transition"
          />

          <button
            onClick={generateTombstone}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:opacity-80 transition"
          >
            GENERATE MY TOMBSTONE
          </button>
        </>
      ) : (
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Your Tombstone</h2>

          <div className="border border-gray-700 p-10 rounded-lg bg-gray-900 text-lg leading-relaxed">
            {result}
          </div>

          <button
            onClick={() => {
              setResult(null);
              setText("");
            }}
            className="mt-8 text-gray-400 underline hover:text-white transition"
          >
            Write Again
          </button>
        </div>
      )}
    </main>
  );
}
