import React from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodo";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold text-center mb-8">PERN Todo List</h1>
      <div>
        <InputTodo />
        <ListTodos />
      </div>
    </div>
  );
};

export default App;
