import { observable, action, computed } from "mobx";
import { Todo } from "data/models/todo";

export class TodoStore {
  @observable todos: Todo[] = [
    { description: "Testing", createdAt: new Date(), isCompleted: false },
  ];

  @computed get sortedTodos(): Todo[] {
    const sortedTodos = this.todos
      .slice()
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    return sortedTodos;
  }

  @action addTodo = (description: string) => {
    this.todos.push({
      description,
      createdAt: new Date(),
      isCompleted: false,
    });
  };
}
