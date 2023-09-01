import { MDBBtn, MDBIcon, MDBInput } from "mdb-react-ui-kit";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const user = useLoaderData();
  const { _id, name, email, gender, status } = user;
  console.log(user);

  const handleUpdateUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;

    const updatedUser = { name, email, gender, status };

    Swal.fire({
      title: "Are you sure?",
      text: "This user's info will be updated!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update the user!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire(
                "Updated",
                "User's info is successfully updated!",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div className="w-50 mx-auto mb-5">
      <Link className="fs-5 fw-bold mt-5 mb-4 d-block" to="/">
        <MDBIcon fas icon="angle-double-left" className="me-2" />
        All Users
      </Link>

      <div className="text-center mb-4">
        <h3 className="fw-bolder">Update User</h3>
        <p className="text-muted">
          Use the below form to edit info of the user
        </p>
      </div>

      <form onSubmit={handleUpdateUser}>
        <label htmlFor="" className="text-muted mb-2">
          Name
        </label>
        <MDBInput type="text" name="name" defaultValue={name} required />
        <br />
        <label htmlFor="" className="text-muted mb-2">
          Email
        </label>
        <MDBInput type="text" name="email" defaultValue={email} required />

        <br />

        <label htmlFor="" className="mt-2">
          Gender
        </label>
        <div className="d-inline-block ms-5">
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              defaultChecked={gender === "Male"}
              className="me-1"
            />
            Male
          </label>
          <label htmlFor="female" className="ms-3">
            <input
              type="radio"
              name="gender"
              id="female"
              value="Female"
              defaultChecked={gender === "Female"}
              className="me-1"
            />
            Female
          </label>
        </div>

        <br />

        <label htmlFor="" className="mt-4">
          Status
        </label>
        <div className="d-inline-block ms-5">
          <label htmlFor="active">
            <input
              type="radio"
              name="status"
              id="active"
              value="Active"
              defaultChecked={status === "Active"}
              className="me-1"
            />
            Active
          </label>
          <label htmlFor="inactive" className="ms-3">
            <input
              type="radio"
              name="status"
              id="inactive"
              value="Inactive"
              defaultChecked={status === "Inactive"}
              className="me-1"
            />
            Inactive
          </label>
        </div>

        <br />

        <MDBBtn
          className="bg-warning bg-gradient bg-opacity-75 w-100 mt-5"
          type="submit"
        >
          Update
        </MDBBtn>
      </form>
    </div>
  );
};

export default UpdateUser;
