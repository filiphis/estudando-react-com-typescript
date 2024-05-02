import { FunctionComponent } from "react";
import "./style.scss";

interface ListProps {}

const List: FunctionComponent<ListProps> = () => {
  const tasks = [
    {
      title: "React",
      timeToComplete: "02:00:00",
    },
    {
      title: "Javascript",
      timeToComplete: "01:00:00",
    },
    {
      title: "Typescript",
      timeToComplete: "03:00:00",
    },
  ];
  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className="item">
            <h3>{item.title}</h3>
            <span>{item.timeToComplete}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default List;
