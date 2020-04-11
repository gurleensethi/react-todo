import * as React from "react";
import { Todo } from "../../../data/models/todo";
import { observer } from "mobx-react";
import { TodoListItem } from "./TodoListItem";
import styled from "styled-components";

interface Props {
  todos: Todo[];
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
          <TodoListItem todo={todo} />
        ))}
      </Container>
    );
  }
}
