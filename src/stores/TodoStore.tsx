import { observable, action, computed } from "mobx";
import { Todo } from "data/models/todo";

export class TodoStore {
  @observable.shallow todos: Todo[] = [
    { description: "Testing", createdAt: new Date(), isCompleted: false },
  ];

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
    this.todos.push({
      description,
      createdAt: new Date(),
      isCompleted: false,
    });
  };

  @action toggleTodo = (todo: Todo) => {
    const todoFromList = this.todos.find(
      (t) => todo.createdAt.getTime() === t.createdAt.getTime()
    );
    if (todoFromList) {
      todoFromList.isCompleted = true;
    }
    console.log(this.todos);
  };
}
