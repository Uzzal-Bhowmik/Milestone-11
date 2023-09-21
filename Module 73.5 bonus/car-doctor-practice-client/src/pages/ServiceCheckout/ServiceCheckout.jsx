import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import checkoutBg from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../../providers/ContextAuth";

const ServiceCheckout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, price, img, description } = service;

  const handleBookService = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = user?.email;
    const bookingDetails = { name, title, price, img, email };
    console.log(bookingDetails);

    fetch("https://car-doctor-server-coral-eta.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Booking Successful");
        }
      });
  };

  return (
    <div>
      {/* banner */}
      <div
        className="container h-[280px] rounded-3xl flex items-center ps-24 mt-8 mb-20"
        style={{
          backgroundImage: `url(${checkoutBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h4 className="text-5xl font-extrabold text-white">Check Out</h4>
      </div>

      {/* form  */}

      <div className="hero min-h-screen bg-base-200 mb-10 p-12">
        <div className="card w-[99%] md:w-10/12 shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleBookService}>
            {/* ---------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your full name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  placeholder="service name"
                  name="serviceName"
                  defaultValue={title}
                  className="input input-bordered"
                  disabled
                />
              </div>
            </div>
            {/* -------- */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  name="price"
                  defaultValue={"$" + price}
                  className="input input-bordered"
                  disabled
                />
              </div>
            </div>
            {/* ------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Details</span>
              </label>
              <textarea
                className="textarea textarea-bordered text-gray-500 h-24"
                readOnly
                defaultValue={description}
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button
                className="btn btn-error font-bold text-white"
                disabled={!user?.email ? true : false}
              >
                Book Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceCheckout;
