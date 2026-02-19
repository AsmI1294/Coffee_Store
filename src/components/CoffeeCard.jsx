import React from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, onDelete }) => {
  const { _id, photo, name, quantity, price } = coffee;

  const handleDelete = (_id) => {
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
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              onDelete(_id);
            }
          });
      }
    });
  };
  //https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/1.png
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm border-4 border-amber-500 hover:mx-5 justify-between">
        <figure className="m-2 ">
          <img src={photo} alt="Broken link" />
        </figure>
        <div className="flex w-5/6 lg:w-4/6 justify-between lg:m-4 space-x-3">
          <div className="flex flex-col justify-center p-3 space-y-2">
            <h2 className="card-title text-2xl lg:text-3xl">{name}</h2>
            <p className="text-lg lg:text-xl">Price: {price}</p>
            <p className="text-lg lg:text-xl">Quantity: {quantity}</p>
          </div>
          <div className="card-actions justify-end items-center">
            <div className="join join-vertical space-y-3 m-3">
              <Link
                to={`/coffeeDetails/${_id}`}
                className="btn join-item bg-[#331A15] border-amber-300 hover:bg-amber-300 text-lg md:text-xl"
              >
                <FontAwesomeIcon icon={faEye} />
              </Link>
              <Link
                to={`/updateCoffee/${_id}`}
                className="btn join-item bg-[#331A15] border-amber-300 hover:bg-amber-300 text-lg md:text-xl"
              >
                Edit
              </Link>

              <button
                className="btn join-item bg-[#331A15] border-amber-300 hover:bg-amber-300 text-lg md:text-xl"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
