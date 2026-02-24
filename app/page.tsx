export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        LOGGED OUT
      </h1>

      <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl">
        Write your tombstone before fate does.
      </p>

      <a
        href="/write"
        className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-full hover:opacity-80 transition"
      >
        WRITE MY TOMBSTONE
      </a>
    </main>
  );
}
