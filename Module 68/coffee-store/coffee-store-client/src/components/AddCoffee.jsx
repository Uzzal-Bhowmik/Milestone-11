import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const coffeeName = form.coffeeName.value;
    const qunatity = form.qunatity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      coffeeName,
      qunatity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Succes",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }

        form.reset();
      });
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-9/12 bg-[#F4F3F0] rounded-md px-20 py-10">
        <h2 className="text-3xl font-bold">Add a new Coffee Variant</h2>

        <form
          className="block md:grid md:grid-cols-2 gap-4 mt-6"
          onSubmit={handleAddCoffee}
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="coffeeName"
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
              className="input input-bordered w-full"
            />
          </div>

          <div className="col-span-2 mt-4">
            <input
              type="submit"
              value="Add Coffee"
              className="btn btn-block bg-[#D2B48C] text-black hover:text-yellow-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
