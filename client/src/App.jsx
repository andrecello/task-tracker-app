import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // 🔄 Load tasks from server on first load
  useEffect(() => {
    axios.get("/api/tasks")
      .then((res) => {
        console.log("Data from backend:", res.data);
        if (Array.isArray(res.data)) {
          setTasks(res.data);
        } else {
          console.error("Expected an array, got:", typeof res.data);
          setTasks([]);
        }
      })
      .catch((err) => console.error("Error loading tasks:", err));
  }, []);

  // ➕ Add task handler
  const handleAddTask = (taskTitle) => {
    axios.post("/api/tasks", { title: taskTitle })
      .then((res) => setTasks([res.data, ...tasks]))
      .catch((err) => console.error("Error adding task:", err));
  };

  // ❌ Optional delete task (local only for now)
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>QuickTask 📝</h1>
      <TaskForm onAdd={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
