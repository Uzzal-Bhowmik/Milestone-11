import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative w-full"
        style={{ maxHeight: "90vh" }}
      >
        <img src={img1} className="w-full" />

        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute flex items-center text-white h-full w-1/2 pl-14">
          <div className="space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className="space-x-5">
              <button className="btn btn-error text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle me-3">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full"
        style={{ maxHeight: "90vh" }}
      >
        <img src={img2} className="w-full" />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute flex items-center text-white h-full w-1/2 pl-14">
          <div className="space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className="space-x-5">
              <button className="btn btn-error text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle me-3">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full"
        style={{ maxHeight: "90vh" }}
      >
        <img src={img3} className="w-full" />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute flex items-center text-white h-full w-1/2 pl-14">
          <div className="space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className="space-x-5">
              <button className="btn btn-error text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle me-3">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-full"
        style={{ maxHeight: "90vh" }}
      >
        <img src={img4} className="w-full" />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute flex items-center text-white h-full w-1/2 pl-14">
          <div className="space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className="space-x-5">
              <button className="btn btn-error text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle me-3">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
