import React, { useEffect, useState } from "react";
import HOC from "./HOC";
export const UsersList = ({ data }) => {
  // const [users, setUsers] = useState([]);
  // const [term, setTerm] = useState("");
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     setUsers(data);
  //   };
  //   fetchUsers();
  // }, []);

  // const filterUsers = users
  //   .filter(({ name }) => {
  //     return name.indexOf(term) >= 0;
  //   })
  //   .map((user) => {
  //     return <div key={user.id}>{user.name}</div>;
  //   });

  let renderUsers = data.map((user) => {
    return (
      <>
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      </>
    );
  });
  return (
    <>
      <div>UsersList</div>
      {/* <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      /> */}
      <div>{renderUsers}</div>
    </>
  );
};

const SearchUsers = HOC(UsersList, "users");

export default SearchUsers;
