"use client";

import { useState } from "react";

export default function Home() {
  const [judul, setJudul] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);

    const res = await fetch("https://API-KAMU/webhook/ebook-generator", {
      method: "POST",
      body: JSON.stringify({ judul }),
    });

    const data = await res.json();
    setResult(data.content || "Ebook berhasil dibuat");
    setLoading(false);
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        🚀 CuanBook Builder
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <input
          placeholder="Judul Ebook"
          className="w-full border p-3 rounded mb-4"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />

        <button
          onClick={generate}
          className="bg-purple-600 text-white px-6 py-3 rounded"
        >
          🔥 Generate Ebook
        </button>

        {loading && <p className="mt-4">⏳ Loading...</p>}

        {result && (
          <textarea
            className="w-full h-64 border p-3 mt-4 rounded"
            value={result}
            readOnly
          />
        )}

      </div>

    </main>
  );
}
