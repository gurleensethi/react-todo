import * as React from "react";
import { TodoStore } from "../stores/TodoStore";

export const TodoStoreContext = React.createContext<TodoStore>(null!);
