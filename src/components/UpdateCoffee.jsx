import React from "react";
import ScrollToTop from "../layouts/ScrollToTop";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffeeDetails = useLoaderData();
  let navigate = useNavigate();

  const { _id, name, quantity, supplier, taste, price, details, photo } =
    coffeeDetails;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData);
    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <div className="p-12 text-center space-y-4 max-w-5/6 mx-auto bg-[#1d232a]">
        <h1 className="text-2xl md:text-4xl "> Update Coffee</h1>

        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Name</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter coffee name"
                name="name"
                defaultValue={name}
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Quantity</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter coffee Chef"
                name="quantity"
                defaultValue={quantity}
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Supplier</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter coffee supplier"
                name="supplier"
                defaultValue={supplier}
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Taste</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter coffee taste"
                name="taste"
                defaultValue={taste}
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Price</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter coffee category"
                name="price"
                defaultValue={price}
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Details</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter coffee details"
                name="details"
                defaultValue={details}
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset p-4">
              <label className="label text-lg">Photo url</label>
              <input
                type="text"
                className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
                placeholder="Enter photo url"
                name="photo"
                defaultValue={photo}
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

export default UpdateCoffee;
