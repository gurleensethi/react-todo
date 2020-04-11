import * as React from "react";
import { Todo } from "data/models/todo";
import { observer } from "mobx-react";
import styled from "styled-components";

interface Props {
  todo: Todo;
}

const Container = styled.div`
  padding: 20px;
  background-color: white;
  width: 100%;
  color: var(--text-color);
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 1px 1px var(--shadow-color);
  }
`;

@observer
export class TodoListItem extends React.Component<Props> {
  render() {
    const { todo } = this.props;
    return (
      <Container key={todo.createdAt.getTime()}>{todo.description}</Container>
    );
  }
}
