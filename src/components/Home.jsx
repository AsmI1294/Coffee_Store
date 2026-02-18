import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import Banner from "../components/Banner";
import PhotoInsta from "./PhotoInsta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const coffeesList = useLoaderData();

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
          <button className="btn bg-[#331A15] border-amber-300 block text-lg">
            <Link to={`/addCoffee`}>
              Add Coffee <FontAwesomeIcon icon={faMugHot} />
            </Link>
          </button>
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
