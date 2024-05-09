import ListStyles from "./List.module.scss";
import Item from "./Item";
import { Task } from "../../types/task";

interface ListProps {
  tasks: Task[];
  selectTask: (task: Task) => void;
  selectedTask: Task | null;
  cutdownIsRunning: boolean;
}

const List = ({
  tasks,
  selectTask,
  selectedTask,
  cutdownIsRunning,
}: ListProps) => {
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
            cutdownIsRunning={cutdownIsRunning}
          />
        ))}
      </ul>
    </aside>
  );
};

export default List;
