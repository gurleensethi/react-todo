import { observable, action, computed } from "mobx";
import { Todo } from "data/models/todo";

export class TodoStore {
  @observable.shallow todos: Todo[] = observable.array([]);

  @computed get pendingTodos(): Todo[] {
    return this.todos
      .filter((todo) => !todo.isCompleted)
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }

  @computed get completedTodos(): Todo[] {
    return this.todos
      .filter((todo) => todo.isCompleted)
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }

  @action addTodo = (description: string) => {
    if (description.trim()) {
      this.todos.push({
        description,
        createdAt: new Date(),
        isCompleted: false,
      });
    }
  };

  @action toggleTodo = (todo: Todo) => {
    todo.isCompleted = !todo.isCompleted;
  };
}
