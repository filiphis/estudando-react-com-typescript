import { FunctionComponent } from "react";
import ListStyles from "./List.module.scss";
import Item from "./Item";
import { Task } from "../../types/task";

interface ListProps {
  tasks: Task[];
  selectTask: (task: Task) => void;
  selectedTask: Task | null;
}

const List: FunctionComponent<ListProps> = ({
  tasks,
  selectTask,
  selectedTask,
}) => {
  return (
    <aside className={ListStyles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((taskItem) => (
          <Item
            key={taskItem.id}
            {...taskItem}
            selectTask={selectTask}
            isSelected={taskItem.id === selectedTask?.id}
          />
        ))}
      </ul>
    </aside>
  );
};

export default List;
