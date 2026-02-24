"use client";

import { useState } from "react";

export default function WritePage() {
  const [text, setText] = useState("");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
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
        className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:opacity-80 transition"
      >
        GENERATE MY TOMBSTONE
      </button>
    </main>
  );
}
