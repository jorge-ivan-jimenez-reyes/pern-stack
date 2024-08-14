import React, { Fragment, useState } from "react";

interface Todo {
  todo_id: number;
  description: string;
}

interface EditTodoProps {
  todo: Todo;
}

const EditTodo: React.FC<EditTodoProps> = ({ todo }) => {
  const [description, setDescription] = useState<string>(todo.description);

  const updateDescription = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location.reload();
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("An unknown error occurred", err);
      }
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        className="modal fade text-black"
        id={`id${todo.todo_id}`}
        tabIndex={-1}
        aria-labelledby={`modalLabel${todo.todo_id}`}
        aria-hidden="true"
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog modal-dialog-centered max-w-sm">
          <div className="modal-content bg-darkGray text-white">
            <div className="modal-header">
              <h5 className="modal-title" id={`modalLabel${todo.todo_id}`}>
                Edit Todo
              </h5>
              <button
                type="button"
                className="btn-close bg-white text-black p-1 rounded-full"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="w-full p-2 border border-gray-600 rounded bg-darkGray text-white focus:outline-none focus:ring-2 focus:ring-neonBlue"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer flex justify-between">
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
              <button
                type="button"
                className="bg-neonBlue text-black px-4 py-2 rounded hover:bg-darkBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-neonBlue"
                onClick={updateDescription}
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
