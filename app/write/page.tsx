"use client";

import { useState } from "react";

export default function WritePage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function generateTombstone() {
    if (!text.trim()) return;

    setResult(
      "Here lies someone who tried to matter, scrolled endlessly, and left behind unfinished drafts."
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
            className="w-full max-w-2xl h-48 bg-gray-900 border border-gray-700 p-4 rounded-lg mb-6 focus:outline-none"
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

          <div className="border border-gray-700 p-8 rounded-lg bg-gray-900 text-lg">
            {result}
          </div>

          <button
            onClick={() => setResult(null)}
            className="mt-8 text-gray-400 underline"
          >
            Write Again
          </button>
        </div>
      )}
    </main>
  );
}
