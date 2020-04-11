import * as React from "react";
import { TodoStore } from "../stores/TodoStore";

export const TodoStoreContext = React.createContext<TodoStore>(null!);

interface HOCProps {
  todoStore: TodoStore;
}

export function withTodoStore<P extends HOCProps>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<Omit<P, keyof HOCProps>> {
  const ComponentWithStore: React.ComponentType<P> = class extends React.Component<
    P
  > {
    render() {
      return (
        <TodoStoreContext.Consumer>
          {(store) => <WrappedComponent todoStore={store} {...this.props} />}
        </TodoStoreContext.Consumer>
      );
    }
  };

  ComponentWithStore.displayName = WrappedComponent.displayName;
  return (ComponentWithStore as unknown) as React.ComponentType<
    Omit<P, keyof HOCProps>
  >;
}
