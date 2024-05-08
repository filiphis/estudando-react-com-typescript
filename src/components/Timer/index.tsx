import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { Task } from "../../types/task";
import { convertTimeToSeconds } from "../../utils/dateHelpers";
import { useEffect, useState } from "react";

interface TimerProps {
  selectedTask: Task | null;
}

const Timer = ({ selectedTask }: TimerProps) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selectedTask?.timeToComplete) {
      setTime(convertTimeToSeconds(selectedTask.timeToComplete));
    }
  }, [selectedTask]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <p>Time: {time}</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button>Começar!</Button>
    </div>
  );
};

export default Timer;
