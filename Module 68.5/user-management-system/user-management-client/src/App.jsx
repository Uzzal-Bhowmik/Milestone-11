import {
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import "./App.css";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState(useLoaderData());

  // delete user
  const handleDeleteUser = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete the user!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted",
                "User has been deleted from the database!",
                "success"
              );

              // update client side data
              const rest = users.filter((user) => user._id !== _id);
              setUsers(rest);
            }
          });
      }
    });
  };

  return (
    <div className="container">
      <Link to="/addUser" className="text-decoration-none">
        <MDBBtn outline color="primary" className="px-5 py-3 mt-5">
          New User <MDBIcon fas icon="user-plus" />
        </MDBBtn>
      </Link>

      <MDBTable className="mt-4" striped>
        <MDBTableHead>
          <tr className="table-dark">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {users.map((user, idx) => (
            <tr key={user._id}>
              <th scope="row">{idx + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.status}</td>
              <td>
                <Link
                  to={`/updateUser/${user._id}`}
                  className="text-decoration-none"
                >
                  <MDBBtn className="m-1 hover-shadow bg-white text-dark">
                    <MDBIcon fas icon="user-edit" size="lg" />
                  </MDBBtn>
                </Link>

                <MDBBtn
                  className="m-1 hover-shadow bg-white text-dark"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  <MDBIcon fas icon="user-times" size="lg" />
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default App;
