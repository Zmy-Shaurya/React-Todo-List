import { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const updatedTasks = [...tasks, { text: newTask, completed: false }];
    setTasks(updatedTasks);
    setNewTask("");
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>📝 To-Do List</h1>

      <input
        type="text"
        placeholder="Enter new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button id="addButton" onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            onDelete={handleDeleteTask}
            onToggle={handleToggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
