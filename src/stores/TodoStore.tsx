import { observable, action } from "mobx";
import { Todo } from "data/models/todo";

export class TodoStore {
  @observable todos: Todo[] = [
    { description: "testing", createdAt: new Date(), isCompleted: false },
  ];
}
