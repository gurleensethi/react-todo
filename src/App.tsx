import * as React from "react";
import { TodoStoreContext } from "./context/TodoStoreContext";
import { TodoStore } from "./stores/TodoStore";
import { TodoPage } from "./ui/todo/TodoPage";
import "./App.css";
import { configure } from "mobx";

configure({ enforceActions: "always" });

export const App: React.FunctionComponent = (props) => {
  return (
    <div className="primary-theme">
      <TodoStoreContext.Provider value={new TodoStore()}>
        <TodoPage />
      </TodoStoreContext.Provider>
    </div>
  );
};
