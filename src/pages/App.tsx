import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import AppStyle from "./App.module.scss";
import { Task } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const selectTask = (task: Task) => {
    setSelectedTask(task);
  };

  return (
    <div className={AppStyle.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} selectedTask={selectedTask} />
      <Timer selectedTask={selectedTask} />
    </div>
  );
}

export default App;
