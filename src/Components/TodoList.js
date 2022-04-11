import React, { useEffect, useState } from "react";
import HOC from "./HOC";

export const TodoList = ({ data }) => {
  // const [todos, setTodos] = useState([]);
  // const [term, setTerm] = useState("");
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const data = await res.json();
  //     setTodos(data);
  //   };
  //   fetchTodos();
  // }, []);

  // const filterTodos = todos
  //   .slice(0, 10)
  //   .filter(({ title }) => {
  //     return title.indexOf(term) >= 0;
  //   })
  //   .map((todo) => {
  //     return <div key={todo.userId}>{todo.title}</div>;
  //   });

  const renderTodos = data.map((todo) => {
    return (
      <div>
        <p>{todo.title}</p>
      </div>
    );
  });

  return (
    <>
      {/* <div>Todo List</div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      /> */}
      <div>{renderTodos}</div>
    </>
  );
};

const SearchTodos = HOC(TodoList, "todos");

export default SearchTodos;
