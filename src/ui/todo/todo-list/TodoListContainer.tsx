import * as React from "react";
import { TodoList } from "./TodoList";
import { TodoStoreContext } from "context/TodoStoreContext";

export class TodoListContainer extends React.Component {
  render() {
    return (
      <TodoStoreContext.Consumer>
        {(store) => <TodoList todos={store.todos} />}
      </TodoStoreContext.Consumer>
    );
  }
}
