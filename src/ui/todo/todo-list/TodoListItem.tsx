import * as React from "react";
import { Todo } from "data/models/todo";
import { observer } from "mobx-react";
import styled from "styled-components";

interface Props {
  todo: Todo;
  onToggle: () => void;
}

const Container = styled.div`
  padding: 20px;
  background-color: white;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    box-shadow: 0px 1px 1px var(--shadow-color);
  }
`;

const TodoCheckbox = styled.input`
  height: 25px;
  width: 25px;
  margin: 0;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const TodoText = styled.span`
  color: var(--text-color);
  font-size: 20px;
  font-weight: bold;
`;

@observer
export class TodoListItem extends React.Component<Props> {
  render() {
    const { todo } = this.props;
    return (
      <Container key={todo.createdAt.getTime()}>
        <TodoCheckbox
          type="checkbox"
          onChange={this.props.onToggle}
          checked={todo.isCompleted}
        />
        <TodoText>{todo.description}</TodoText>
      </Container>
    );
  }
}
