import { FunctionComponent } from "react";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { Task } from "../../types/task";

interface TimerProps {
  selectedTask: Task | null;
}

const Timer: FunctionComponent<TimerProps> = ({ selectedTask }) => {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>Começar!</Button>
    </div>
  );
};

export default Timer;
