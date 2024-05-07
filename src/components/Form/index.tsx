import React from "react";
import Button from "../Button";
import FormStyles from "./Form.module.scss";
import { Task } from "../../types/task";
import { v4 as uuid } from "uuid";

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

interface FormState {}

class Form extends React.Component<FormProps, FormState> {
  state = {
    title: "",
    timeToComplete: "00:00:00",
  };

  handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      { ...this.state, id: uuid(), selected: false, completed: false },
    ]);
    // this.props.setTasks(tarefasAntigas => [...tarefasAntigas, {... this.state }

    this.setState({
      title: "",
      timeToComplete: "00:00:00",
    });
  }
  render() {
    return (
      <form
        className={FormStyles.novaTarefa}
        onSubmit={this.handleFormSubmit.bind(this)}
      >
        <div className={FormStyles.inputContainer}>
          <label htmlFor="title">Adicione um novo estudo</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={(event) =>
              this.setState({ ...this.state, title: event.target.value })
            }
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={FormStyles.inputContainer}>
          <label htmlFor="timeToComplete">Tempo</label>
          <input
            type="time"
            step="1"
            name="timeToComplete"
            id="timeToComplete"
            value={this.state.timeToComplete}
            onChange={(event) =>
              this.setState({
                ...this.state,
                timeToComplete: event.target.value,
              })
            }
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button>Adicionar</Button>
      </form>
    );
  }
}

export default Form;
