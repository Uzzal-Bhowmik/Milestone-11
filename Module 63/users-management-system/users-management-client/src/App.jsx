import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // get method
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const user = { name, age };

    // post method
    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, data]);
        form.reset();
      });
  };

  return (
    <div>
      <h1>Hello User: {users.length}</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="number" name="age" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>

      <div>
        <ol>
          {users.map((user) => (
            <li
              key={user.id}
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                fontSize: "1.2rem",
              }}
            >
              Name: {user.name} ---- Age: {user.age}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
