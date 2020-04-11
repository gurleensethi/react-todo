import * as React from "react";

interface Props {
  addTodo: (text: string) => void;
}

interface State {
  text: string;
}

export class TodoInput extends React.Component<Props, State> {
  state = {
    text: "",
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.text} onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
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
