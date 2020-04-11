import * as React from "react";
import { TodoStoreContext } from "./context/TodoStoreContext";
import { TodoStore } from "./stores/TodoStore";
import { TodoPage } from "./ui/todo/TodoPage";

export const App: React.FunctionComponent = (props) => {
  return (
    <TodoStoreContext.Provider value={new TodoStore()}>
      <TodoPage />
    </TodoStoreContext.Provider>
  );
};
