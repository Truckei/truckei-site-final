/ pages/index.tsx

export default function Home() {
  return (
    <main className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Bem-vindo à Truckei
      </h1>
      <p className="text-center text-lg mb-4 text-gray-700">
        Compare caminhões 0km de todas as marcas do Brasil.
      </p>
      <div className="flex justify-center">
        <a
          href="/comparador"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Comparar Caminhões
        </a>
      </div>
    </main>
  );
}
