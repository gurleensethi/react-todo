import * as React from "react";
import { TodoListContainer } from "./todo-list/TodoListContainer";
import { TodoInputContainer } from "./todo-input/TodoInputContainer";
import styled from "styled-components";

const Page = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--background-color);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 40px;
`;

const SectionTitle = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 28px;
  color: var(--text-color);
`;

export class TodoPage extends React.Component {
  render() {
    return (
      <Page>
        <Container>
          <TodoInputContainer />
          <SectionTitle>Todos</SectionTitle>
          <TodoListContainer />
        </Container>
      </Page>
    );
  }
}
