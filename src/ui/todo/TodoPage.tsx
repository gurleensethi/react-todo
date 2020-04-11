import * as React from "react";
import { TodoListContainer } from "./todo-list/TodoListContainer";

export class TodoPage extends React.Component {
  render() {
    return (
      <div>
        <TodoListContainer />
      </div>
    );
  }
}
