import style from "./Item.module.scss";
import { Task } from "../../../types/task";

interface ItemProps extends Task {
  selectTask: (task: Task) => void;
  isSelected: boolean;
  cutdownIsRunning: boolean;
}

const Item = ({
  title,
  timeToComplete,
  completed,
  selected,
  id,
  selectTask,
  isSelected,
  cutdownIsRunning,
}: ItemProps) => {
  return (
    <li
      className={`${style.item} ${isSelected && style.itemSelecionado} ${
        completed && style.itemCompletado
      } ${cutdownIsRunning && style.itemBloqueado}`}
      onClick={(e) =>
        !completed &&
        !cutdownIsRunning &&
        selectTask({ id, title, timeToComplete, completed, selected })
      }
    >
      <h3>{title}</h3>
      <span>{timeToComplete}</span>
      <span className={`${completed && style.concluido}`}></span>
    </li>
  );
};

export default Item;
