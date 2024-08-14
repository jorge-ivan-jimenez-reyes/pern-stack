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
      <table className="min-w-full bg-darkGray shadow-md rounded-lg mt-5 text-white">
        <thead className="bg-black">
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-700">Description</th>
            <th className="py-2 px-4 border-b-2 border-gray-700">Edit</th>
            <th className="py-2 px-4 border-b-2 border-gray-700">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td className="py-2 px-4 border-b border-gray-700">{todo.description}</td>
              <td className="py-2 px-4 border-b border-gray-700">
                <EditTodo todo={todo} />
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
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
