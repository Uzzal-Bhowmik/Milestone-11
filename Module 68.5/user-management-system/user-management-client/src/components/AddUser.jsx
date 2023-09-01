import { MDBBtn, MDBIcon, MDBInput } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddUser = () => {
  const handleAddUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;

    const newUser = { name, email, gender, status };

    Swal.fire({
      title: "Are you sure?",
      text: "A new user will be added!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add the user!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire(
                "Added!",
                "A New User has been added into the database.",
                "success"
              );
              form.reset();
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
        <h3 className="fw-bolder">New User</h3>
        <p className="text-muted">Use the below form to add a new user</p>
      </div>

      <form onSubmit={handleAddUser}>
        <label htmlFor="" className="text-muted mb-2">
          Name
        </label>
        <MDBInput type="text" name="name" required />
        <br />
        <label htmlFor="" className="text-muted mb-2">
          Email
        </label>
        <MDBInput type="text" name="email" required />

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
              className="me-1"
            />
            Inactive
          </label>
        </div>

        <br />

        <MDBBtn
          className="bg-success bg-gradient bg-opacity-75 w-100 mt-5"
          type="submit"
        >
          Submit
        </MDBBtn>
      </form>
    </div>
  );
};

export default AddUser;
