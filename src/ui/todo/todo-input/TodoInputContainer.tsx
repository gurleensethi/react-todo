import * as React from "react";
import { TodoStoreContext } from "context/TodoStoreContext";
import { TodoInput } from "./TodoInput";

export class TodoInputContainer extends React.Component {
  render() {
    return (
      <TodoStoreContext.Consumer>
        {(store) => <TodoInput addTodo={(text) => store.addTodo(text)} />}
      </TodoStoreContext.Consumer>
    );
  }
}
