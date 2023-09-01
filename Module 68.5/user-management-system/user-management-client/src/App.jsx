import {
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import "./App.css";
import { Link, useLoaderData } from "react-router-dom";

function App() {
  const users = useLoaderData();

  console.log(users);

  return (
    <div className="container">
      <Link to="/addUser" className="text-decoration-none">
        <MDBBtn outline color="primary" className="px-5 py-3 mt-5">
          New User <MDBIcon fas icon="user-plus" />
        </MDBBtn>
      </Link>

      <MDBTable className="mt-4" striped hover>
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
              <td></td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default App;
