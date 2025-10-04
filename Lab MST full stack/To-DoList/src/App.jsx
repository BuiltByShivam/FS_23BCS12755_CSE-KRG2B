import { useState } from "react";
import TodoInput from "./components/ToDoInput";
import TodoItem from "./components/ToDoItems";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-50 p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Todo List</h1>

        <TodoInput input={input} setInput={setInput} addTask={addTask} />

        <ul className="space-y-3">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
