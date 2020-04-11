import * as React from "react";
import { Todo } from "../../../data/models/todo";
import { observer } from "mobx-react";

interface Props {
  todos: Todo[];
}

interface State {}

@observer
export class TodoList extends React.Component<Props, State> {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <div key={todo.createdAt.getTime()}>{todo.description}</div>
        ))}
      </div>
    );
  }
}
