import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setDeletedId }) => {
  const {
    _id,
    coffeeName,
    quantity,
    supplier,
    taste,
    category,
    details,
    photo,
  } = coffee;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Selected Coffee has been deleted.",
                "success"
              );
              setDeletedId(_id);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl border border-yellow-300">
      <figure>
        <img src={photo} alt="coffee thumbnail" />
      </figure>
      <div className="flex justify-between items-center px-4 w-full">
        <div>
          <h2 className="card-title">{coffeeName}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Category: {category}</p>
          <p>Taste: {taste}</p>
        </div>
        <div className="btn-group btn-group-vertical space-y-3">
          <button className="btn btn-neutral">View</button>
          <Link to={`/coffee/${_id}`} role="button">
            <button className="btn btn-neutral">Edit</button>
          </Link>
          <button className="btn btn-error" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
