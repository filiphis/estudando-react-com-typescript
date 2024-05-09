import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { Task } from "../../types/task";
import { convertTimeToSeconds } from "../../utils/dateHelpers";
import { useEffect, useState } from "react";

interface TimerProps {
  selectedTask: Task | null;
  taskHasCompleted: (selectedTask: Task) => void;
  setCutdownIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const Timer = ({
  selectedTask,
  taskHasCompleted,
  setCutdownIsRunning,
}: TimerProps) => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (selectedTask?.timeToComplete) {
      setTime(convertTimeToSeconds(selectedTask.timeToComplete));
    }
  }, [selectedTask]);

  function cutdown(timeCount = 0): void {
    setCutdownIsRunning(true);
    setTimeout(() => {
      if (timeCount > 0) {
        setTime(timeCount - 1);
        return cutdown(timeCount - 1);
      }

      if (selectedTask) {
        taskHasCompleted(selectedTask);
      }
      console.log("Tarefa finalizou!", selectedTask);
      setCutdownIsRunning(false);
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => cutdown(time)}>Começar!</Button>
    </div>
  );
};

export default Timer;
