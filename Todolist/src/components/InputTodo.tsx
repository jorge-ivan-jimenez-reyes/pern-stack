import React, { Fragment, useState } from "react";

const InputTodo: React.FC = () => {
  const [description, setDescription] = useState<string>("");

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
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
      <form className="flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="flex-grow p-4 border border-gray-600 bg-darkGray text-white rounded-l focus:outline-none focus:ring-2 focus:ring-neonBlue"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a todo"
        />
        <button className="bg-neonBlue text-black px-6 py-2 rounded-r hover:bg-darkBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-neonBlue">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
