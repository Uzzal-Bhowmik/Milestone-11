import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
  };

  return (
    <div>
      <h4>
        Update information of {user.name} - {user.email}
      </h4>

      <form action="" onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={user.name} id="" />
        <br />
        <input type="email" name="email" defaultValue={user.email} id="" />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
