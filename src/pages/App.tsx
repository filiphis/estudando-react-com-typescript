import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import AppStyle from "./App.module.scss";
import { Task } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [cutdownIsRunning, setCutdownIsRunning] = useState(false);

  const selectTask = (task: Task) => {
    setSelectedTask(task);
  };

  function taskHasCompleted(selectedTask: Task) {
    setTasks((oldTasks) =>
      oldTasks.map((taskItem) => {
        if (selectedTask.id === taskItem.id) {
          return { ...taskItem, completed: true };
        }
        return taskItem;
      })
    );
  }

  return (
    <div className={AppStyle.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
        selectedTask={selectedTask}
        cutdownIsRunning={cutdownIsRunning}
      />
      <Timer
        selectedTask={selectedTask}
        taskHasCompleted={taskHasCompleted}
        setCutdownIsRunning={setCutdownIsRunning}
      />
    </div>
  );
}

export default App;
