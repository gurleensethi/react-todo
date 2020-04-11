import * as React from "react";
import { TodoList } from "./TodoList";
import { withTodoStore } from "context/TodoStoreContext";
import { TodoStore } from "stores/TodoStore";
import { observer } from "mobx-react";

interface Props {
  todoStore: TodoStore;
  completed: boolean;
}

export const TodoListContainer = withTodoStore(
  observer(
    class extends React.Component<Props> {
      render() {
        const { todoStore, completed } = this.props;
        const todoList = completed
          ? todoStore.completedTodos
          : todoStore.pendingTodos;
        return (
          <TodoList
            todos={todoList}
            onTodoToggle={todoStore.toggleTodo}
            complted={completed}
          />
        );
      }
    }
  )
);
