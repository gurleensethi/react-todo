import * as React from "react";
import { TodoList } from "./TodoList";
import { withTodoStore } from "context/TodoStoreContext";
import { TodoStore } from "stores/TodoStore";

export const TodoListContainer = withTodoStore(
  class extends React.Component<{
    todoStore: TodoStore;
  }> {
    render() {
      return <TodoList todos={this.props.todoStore.todos} />;
    }
  }
);
