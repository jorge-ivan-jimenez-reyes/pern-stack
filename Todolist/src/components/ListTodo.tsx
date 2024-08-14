import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

interface Todo {
  todo_id: number;
  description: string;
}

const ListTodos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const deleteTodo = async (id: number) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("An unknown error occurred", err);
      }
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("An unknown error occurred", err);
      }
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="min-w-full bg-white shadow-md rounded-lg mt-5">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-300">Description</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Edit</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td className="py-2 px-4 border-b">{todo.description}</td>
              <td className="py-2 px-4 border-b">
                <EditTodo todo={todo} />
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
