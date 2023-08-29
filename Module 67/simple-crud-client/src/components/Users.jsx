import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      {users.map((user) => (
        <h4 key={user._id}>
          * {user.name} : {user.email}
        </h4>
      ))}
    </div>
  );
};

export default Users;
