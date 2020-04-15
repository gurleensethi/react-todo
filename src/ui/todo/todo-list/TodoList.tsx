import * as React from "react";
import { Todo } from "../../../data/models/todo";
import { TodoListItem } from "./TodoListItem";
import styled from "styled-components";

interface Props {
  todos: Todo[];
  onTodoToggle: (todo: Todo) => void;
  complted: boolean;
  onDeleteTodo: (todo: Todo) => void;
}

interface State {}

const Container = styled.div`
  width: 100%;
`;

export class TodoList extends React.Component<Props, State> {
  render() {
    const { todos } = this.props;
    return (
      <Container>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.createdAt.getTime()}
            todo={todo}
            onToggle={() => this.props.onTodoToggle(todo)}
            completed={this.props.complted}
            onDelete={() => this.props.onDeleteTodo(todo)}
          />
        ))}
      </Container>
    );
  }
}
