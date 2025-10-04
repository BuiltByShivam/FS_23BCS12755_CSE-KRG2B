export default function TodoInput({ input, setInput, addTask }) {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-3 rounded-l-lg outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 px-5 py-3 rounded-r-lg text-white font-semibold hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
}
