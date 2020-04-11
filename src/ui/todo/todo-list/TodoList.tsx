import * as React from "react";
import { Todo } from "../../../data/models/todo";

interface Props {
  todos: Todo[];
}

interface State {}

export class TodoList extends React.Component<Props, State> {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <div>{todo.description}</div>
        ))}
      </div>
    );
  }
}
