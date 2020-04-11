import { observable, action, computed, autorun, IObservableArray } from "mobx";
import { Todo } from "data/models/todo";

export class TodoStore {
  @observable.shallow todos: IObservableArray<Todo> = observable.array([]);

  constructor() {
    this.loadTodosFromStorage();
    this.updateLocalStorage();
  }

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

  @action private loadTodosFromStorage = () => {
    const todosStr = localStorage.getItem("todos");
    if (todosStr) {
      this.todos = observable.array(
        JSON.parse(todosStr).map((todo: Todo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }))
      );
    }
  };

  private updateLocalStorage = () => {
    autorun(() => {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    });
  };
}
