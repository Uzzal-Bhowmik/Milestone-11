import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const bookToUpdate = useLoaderData();

  // update method
  const handleUpdateBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookName = form.bookName.value;
    const author = form.author.value;

    const updatedBook = { bookName, author };

    fetch(`http://localhost:5000/books/${bookToUpdate._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          window.alert("Data Updated Successfully");
        }
      });
  };

  return (
    <div>
      <h2>Update Info</h2>
      <form onSubmit={handleUpdateBook}>
        <input
          type="text"
          name=""
          id="bookName"
          defaultValue={`${bookToUpdate.bookName}`}
        />
        <br />
        <input
          type="text"
          name=""
          id="author"
          defaultValue={`${bookToUpdate.author}`}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
