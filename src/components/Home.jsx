import { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import Banner from "../components/Banner";
import PhotoInsta from "./PhotoInsta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  const coffeesList = useLoaderData();
  const { user } = use(AuthContext);
  console.log(user);
  const [coffees, setCoffees] = useState(coffeesList);

  const updateCoffee = (id) => {
    const newCoffeeList = coffees.filter((coffee) => coffee._id != id);
    setCoffees(newCoffeeList);
  };

  return (
    <div className="max-w-full">
      <Banner></Banner>
      <div className="max-w-5/6 mx-auto">
        <div className="space-y-3 justify-items-center my-6 lg:my-12">
          <p>--- Sip & Savor ---</p>
          <p className="text-2xl md:text-4xl">Our Popular Products</p>
          <div className="flex space-x-3">
            {user?.data.userType === "admin" ? (
              <>
                <button className="btn bg-[#331A15] border-amber-300 block text-lg transition transform hover:scale-120">
                  <Link to={`/addCoffee`}>
                    Add Coffee <FontAwesomeIcon icon={faMugHot} />
                  </Link>
                </button>
                <div>
                  {/* The button to open modal */}
                  <label
                    htmlFor="my_modal_6"
                    className="btn bg-[#331A15] border-amber-300  text-lg transition transform hover:scale-120"
                  >
                    Change Security Key
                  </label>

                  <input
                    type="checkbox"
                    id="my_modal_6"
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    <form className="modal-box">
                      <input
                        type="text"
                        className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black mb-4"
                        placeholder="Enter Key"
                      />
                      <div className="modal-action">
                        <label
                          htmlFor="my_modal_6"
                          className="btn bg-[#331A15] border-amber-300 text-xl"
                        >
                          Save key
                        </label>
                        <label
                          htmlFor="my_modal_6"
                          className="btn bg-[#331A15] border-amber-300 text-xl"
                        >
                          Close!
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
                <button className="btn bg-[#331A15] border-amber-300 block text-lg transition transform hover:scale-120">
                  <Link to={`/users`}>
                    All Users <FontAwesomeIcon icon={faCircleUser} />
                  </Link>
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <button className="btn bg-[#331A15] border-amber-300 block text-lg transition transform hover:scale-120 w-45 mb-3">
                  <Link to={`/addCoffee`}>
                    Add to Cart <FontAwesomeIcon icon={faCartShopping} />
                  </Link>
                </button>
                <p>
                  Save the quantity you want to purchase and then press 'Add to
                  cart' button*
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  lg:gap-x-30  min-h-96">
          {coffees.length > 0 ? (
            coffees.map((coffee) => (
              <CoffeeCard
                key={coffee._id}
                coffee={coffee}
                onDelete={updateCoffee}
              />
            ))
          ) : (
            <p className="text-2xl md:text-4xl mx-auto pt-6 text-gray-500">
              No coffees available ☕
            </p>
          )}
        </div>
        <PhotoInsta></PhotoInsta>
      </div>
    </div>
  );
};

export default Home;
