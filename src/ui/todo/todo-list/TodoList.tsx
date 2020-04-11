import * as React from "react";
import { Todo } from "../../../data/models/todo";
import { TodoListItem } from "./TodoListItem";
import styled from "styled-components";
import { observer } from "mobx-react";

interface Props {
  todos: Todo[];
  onTodoToggle: (todo: Todo) => void;
}

interface State {}

const Container = styled.div`
  width: 100%;
`;

@observer
export class TodoList extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        {this.props.todos.map((todo) => (
          <TodoListItem
            key={todo.createdAt.getTime()}
            todo={todo}
            onToggle={() => this.props.onTodoToggle(todo)}
          />
        ))}
      </Container>
    );
  }
}
