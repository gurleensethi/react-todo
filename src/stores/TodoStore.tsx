import { observable, action, computed } from "mobx";
import { Todo } from "data/models/todo";

export class TodoStore {
  @observable todos: Todo[] = [
    { description: "testing", createdAt: new Date(), isCompleted: false },
  ];

  @computed get sortedTodos(): Todo[] {
    return this.todos.sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
    );
  }

  @action addTodo = (description: string) => {
    this.todos.push({
      description,
      createdAt: new Date(),
      isCompleted: false,
    });
  };
}
