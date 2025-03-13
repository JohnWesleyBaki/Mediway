function App() {
  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen w-screen space-y-6">
      <div className="space-y-4">
        <img src="./1.svg" alt="Logo" className="w-32 h-32" />
      </div>
      <h1 className="text-white text-2xl">Launching soon</h1>

      <div className="flex space-x-4">
        <a
          href="https://docsend.com/view/7qwy3asrevqsrnbc"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Pitch Deck
        </a>
        <a
          href="https://youtu.be/XENFJfpkuXQ"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Early Prototype
        </a>
      </div>
    </div>
  );
}

export default App;
