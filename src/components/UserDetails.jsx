import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import ScrollToTop from "../layouts/ScrollToTop";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const UserDetails = () => {
  const usersRaw = useLoaderData();
  const { logOut } = use(AuthContext);
  const [users, setUsers] = useState(usersRaw);
  const handleDeleteUser = async (id, uid) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch(`http://localhost:3000/users/${id}/${uid}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
        });
        const updatedUsers = users.filter((user) => user._id != id);
        logOut();
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Something went wrong.",
        icon: "error",
      });
    }
  };

  console.log(users);

  return (
    <div className="overflow-x-auto max-w-5/6 mx-auto backdrop-blur-sm bg-black/30 min-h-[60lvh] p-6">
      <ScrollToTop></ScrollToTop>
      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="table table-pin-rows w-full ">
          <thead className="md:text-lg lg:text-2xl">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Permission Level</th>
              <th>Last Login</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="md:text-xl lg:text-2xl">
            {users.map((user, i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="opacity-50">{i + 1}</div>
                    <div className="font-bold">
                      <FontAwesomeIcon
                        icon={faCircleUser}
                        className="pr-2"
                      ></FontAwesomeIcon>
                      {user.name}
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.userType}</td>
                <td>{user.lastLogin}</td>
                <th>
                  <button
                    className="btn bg-[#331A15] border-amber-300 block text-xl m-6 transition transform hover:scale-120"
                    onClick={() => handleDeleteUser(user._id, user.firebaseUID)}
                    disabled={user.userType === "admin"}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="flex flex-col gap-4 md:hidden">
        {users.map((user, i) => (
          <div
            key={i}
            className="border border-white/20 rounded-lg p-4 flex flex-col gap-2"
          >
            <div className="flex justify-between items-start">
              <div className="flex">
                <div className="opacity-50 mr-1 px-1 border">{i + 1}</div>
                <div className="font-bold text-lg">{user.name}</div>
              </div>
              <button
                className="btn bg-[#331A15] border-amber-300 block text-xl transition transform hover:scale-120"
                onClick={() => handleDeleteUser(user._id, user.firebaseUID)}
                disabled={user.userType === "admin"}
              >
                Delete
              </button>
            </div>
            <div className="text-sm">{user.email}</div>

            <div className="flex justify-between text-sm opacity-70">
              <span>
                Permission: <strong>{user.userType}</strong>
              </span>
              <span>Last login: {user.lastLogin}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
