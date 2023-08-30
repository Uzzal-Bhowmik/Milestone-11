import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState(useLoaderData());

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount === 1) {
          const rest = users.filter((user) => user._id !== _id);
          setUsers(rest);
          window.alert("Deleted successfully");
        }
      });
  };

  return (
    <div>
      {users.map((user) => (
        <h4 key={user._id}>
          * {user.name} : {user.email}{" "}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>X</button>
        </h4>
      ))}
    </div>
  );
};

export default Users;
