import React from "react";
import Swal from "sweetalert2";
import ScrollToTop from "../layouts/ScrollToTop";
import { useNavigate } from "react-router";

const AddCoffee = () => {
  let navigate = useNavigate();
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const coffeeData = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Info",
            text: "Successfully Added",
            imageUrl: coffeeData.photo,
            imageWidth: 193,
            imageHeight: 239,
            imageAlt: "url is broken",
          });
          navigate("/");
        }
      });
    e.target.reset();
  };

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <div className="p-12 text-center space-y-4 max-w-5/6 mx-auto bg-[#1d232a]">
        <h1 className="text-2xl md:text-4xl "> Add New Coffee</h1>
        <p className="text-lg">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Name</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter coffee name"
                name="name"
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Quantity</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter coffee Chef"
                name="quantity"
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Supplier</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter coffee supplier"
                name="supplier"
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Taste</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter coffee taste"
                name="taste"
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Price</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter coffee category"
                name="price"
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Details</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter coffee details"
                name="details"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Photo</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter photo url"
                name="photo"
              />
            </fieldset>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn bg-[#331A15] border-amber-300 block text-xl m-6 hover:px-6 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
