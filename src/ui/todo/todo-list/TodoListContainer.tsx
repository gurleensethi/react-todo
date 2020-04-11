import * as React from "react";
import { TodoList } from "./TodoList";
import { withTodoStore, TodoStoreContext } from "context/TodoStoreContext";
import { TodoStore } from "stores/TodoStore";
import { observer } from "mobx-react";

interface Props {
  completed: boolean;
}

export class TodoListContainer extends React.Component<Props> {
  render() {
    return (
      <TodoStoreContext.Consumer>
        {(todoStore) => {
          const { completed } = this.props;
          const todoList = completed
            ? todoStore.completedTodos
            : todoStore.pendingTodos;
          return (
            <TodoList todos={todoList} onTodoToggle={todoStore.toggleTodo} />
          );
        }}
      </TodoStoreContext.Consumer>
    );
  }
}
