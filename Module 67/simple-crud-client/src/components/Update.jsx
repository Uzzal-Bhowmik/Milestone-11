import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const userToUpdate = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };

    fetch(`http://localhost:5000/users/${userToUpdate._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        data.modifiedCount !== 0 && window.alert("user updated successfully");
      });
  };

  // console.log(userToUpdate);

  return (
    <div>
      <h4>
        Update information of {userToUpdate.name} - {userToUpdate.email}
      </h4>

      <form action="" onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={userToUpdate.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={userToUpdate.email}
          id=""
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
