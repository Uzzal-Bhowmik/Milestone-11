import { useLoaderData, Link } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useEffect, useState } from "react";

function App() {
  const [deletedId, setDeletedId] = useState("");
  const [coffeeData, setCoffeeData] = useState(useLoaderData());

  useEffect(() => {
    if (deletedId) {
      const rest = coffeeData.filter((coffee) => coffee._id !== deletedId);
      setCoffeeData(rest);
    }
  }, [deletedId]);

  console.log(coffeeData);

  return (
    <div>
      <div className="container mx-auto my-14">
        <h1 className="text-6xl text-yellow-600">Coffee Store</h1>
        <Link role="button" to="/addCoffee" className="btn btn-warning my-4">
          Add Coffee
        </Link>

        <div className="grid md:grid-cols-2 gap-5">
          {coffeeData.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              setDeletedId={setDeletedId}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
