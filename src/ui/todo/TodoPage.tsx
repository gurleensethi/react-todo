import * as React from "react";
import { TodoListContainer } from "./todo-list/TodoListContainer";
import { TodoInputContainer } from "./todo-input/TodoInputContainer";

export class TodoPage extends React.Component {
  render() {
    return (
      <div>
        <TodoInputContainer />
        <TodoListContainer />
      </div>
    );
  }
}
