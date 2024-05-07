import { FunctionComponent } from "react";
import style from "./Item.module.scss";
import { Task } from "../../../types/task";

interface ItemProps extends Task {
  selectTask: (task: Task) => void;
  isSelected: boolean;
}

const Item: FunctionComponent<ItemProps> = ({
  title,
  timeToComplete,
  completed,
  selected,
  id,
  selectTask,
  isSelected,
}) => {
  return (
    <li
      className={`${style.item} ${isSelected && style.itemSelecionado}`}
      onClick={(e) =>
        selectTask({ id, title, timeToComplete, completed, selected })
      }
    >
      <h3>{title}</h3>
      <span>{timeToComplete}</span>
    </li>
  );
};

export default Item;
