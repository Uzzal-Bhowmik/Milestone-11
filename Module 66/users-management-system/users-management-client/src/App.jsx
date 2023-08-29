import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const user = { name };

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

  console.log(users);

  return (
    <div>
      <h1>Hello, Users: {users.length}</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>

      <div>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}) {user.name}
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
