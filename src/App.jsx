import { useEffect, useState } from "react";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";
import DateComponent from "./components/DateComponent";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTodos = localStorage.getItem("tasks");
    if (!storedTodos) {
      return [];
    } else {
      return JSON.parse(storedTodos);
    }
  });

  const [taskTitle, setTaskTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          title: taskTitle,
          status: false,
        },
      ]);
      setTaskTitle("");
    }
  };

  return (
    <div className="container">
      <h1>Note your tasks</h1>
      <DateComponent />
      <div className="input-field">
        <input
          type="text"
          className="task-name"
          id="taskInp"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          onKeyDown={addTask}
        />
        <label className="task-label" htmlFor="taskInp">
          Task name
        </label>
      </div>
      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
