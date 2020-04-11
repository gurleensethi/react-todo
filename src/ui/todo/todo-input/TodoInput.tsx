import * as React from "react";
import styled from "styled-components";

interface Props {
  addTodo: (text: string) => void;
}

interface State {
  text: string;
}

const Form = styled.form`
  width: 100%;
  display: flex;
  box-shadow: 0px 2px 2px var(--shadow-color);
  overflow: hidden;
  border-radius: 4px;

  & input {
    flex-grow: 1;
    border: none;
    background-color: white;
    padding: 16px;
    color: black;
    font-size: 16px;
  }

  & button {
    border: none;
    color: white;
    background-color: var(--primary-color);
    padding: 16px;
    font-size: 16px;

    &:hover {
      cursor: pointer;
      background-color: var(--secondary-color);
    }
  }
`;

export class TodoInput extends React.Component<Props, State> {
  state = {
    text: "",
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Enter Todo"
        />
        <button type="submit">Add</button>
      </Form>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    this.setState(() => ({ text }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState(() => ({ text: "" }));
  };
}
