export default function TodoItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
      <span
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700 transition-colors font-bold"
      >
        &times;
      </button>
    </li>
  );
}
