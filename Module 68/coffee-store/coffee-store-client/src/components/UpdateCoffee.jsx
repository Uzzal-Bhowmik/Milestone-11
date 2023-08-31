import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffeeToUpdate = useLoaderData();
  console.log(coffeeToUpdate);

  const {
    _id,
    coffeeName,
    quantity,
    supplier,
    taste,
    category,
    details,
    photo,
  } = coffeeToUpdate;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const coffeeName = form.coffeeName.value;
    const quantity = form.qunatity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      coffeeName,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Coffee data will be updated!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire(
                "Updated!",
                "Selected Coffee has been updated successfully.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div>
      <div
        className="flex justify-center items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-9/12 bg-[#F4F3F0] rounded-md px-20 py-10">
          <h2 className="text-3xl font-bold">Edit Coffee Info</h2>

          <form
            className="block md:grid md:grid-cols-2 gap-4 mt-6"
            onSubmit={handleUpdateCoffee}
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="coffeeName"
                defaultValue={coffeeName}
                className="input input-bordered w-full"
              />
            </div>
            {/* -------- */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Coffee Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Quantity"
                name="qunatity"
                defaultValue={quantity}
                className="input input-bordered w-full"
              />
            </div>
            {/* -------- */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <input
                type="text"
                placeholder="Supplier"
                name="supplier"
                defaultValue={supplier}
                className="input input-bordered w-full"
              />
            </div>
            {/* -------- */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                placeholder="Details"
                name="details"
                defaultValue={details}
                className="input input-bordered w-full"
              />
            </div>
            {/* -------- */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Category"
                name="category"
                defaultValue={category}
                className="input input-bordered w-full"
              />
            </div>
            {/* -------- */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                placeholder="Taste"
                name="taste"
                defaultValue={taste}
                className="input input-bordered w-full"
              />
            </div>
            {/* -------- */}
            <div className="form-control w-full col-span-2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </div>

            <div className="col-span-2 mt-4">
              <input
                type="submit"
                value="Edit Coffee"
                className="btn btn-block bg-[#D2B48C] text-black hover:text-yellow-600"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
