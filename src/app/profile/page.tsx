"use client";

import { useAuthStore } from "@/store/auth";
import ProtectedRoute from "@/components/protectedRoutes";
import pageNavigation from "@/components/pageNavigation";
import { User } from "@/types/user";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLoadingStore } from "@/store/loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const links = [
  { url: "/", name: "Home" },
  { url: "/profile", name: "Profile" },
];

function Profile() {
  const { username } = useAuthStore();
  const { startLoading, stopLoading } = useLoadingStore();
  const [user, setUser] = useState<User>();

  const handleUpdate = async () => {
    try {
      startLoading();
      const resp = await axios.patch("https://fakestoreapi.com/users/1", {
        user,
      });
      stopLoading();
      toast.success("data updated successfully");
      console.log(resp);
    } catch (error) {
      toast.error("Update unsuccesfull");
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        startLoading();
        const data = await axios.get("https://fakestoreapi.com/users/1");
        const user: User = data.data;
        setUser(user);
        stopLoading();
      } catch (error) {
        stopLoading();
        console.log(error);
      }
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col mb-6 p-4">
      <ToastContainer />
      <div className="flex flex-row w-full items-center justify-between p-4">
        {pageNavigation(links)}
        <h1 className="text-xl">
          Welcome! <span className="text-red-500">{username}</span>
        </h1>
      </div>
      <div className="flex flex-row w-full items-center justify-center">
        <div className="w-full max-w-[700px] border border-black rounded-md">
          <div className="flex flex-col p-8">
            <h1 className="text-2xl text-red-500">Edit Your Profile</h1>
            {user && (
              <div className="flex flex-col mt-4 gap-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <label htmlFor="firstname">FirstName</label>
                  <input
                    type="text"
                    id="firstname"
                    className=" outline-none bg-[#F5F5F5] rounded-md p-2"
                    value={user.name.firstname}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        name: { ...user.name, firstname: e.target.value },
                      })
                    }
                  />
                  <label htmlFor="lastname">LastName</label>
                  <input
                    type="text"
                    id="lastname"
                    className="outline-none bg-[#F5F5F5] rounded-md p-2"
                    value={user.name.lastname}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        name: { ...user.name, lastname: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    id="email"
                    className=" outline-none bg-[#F5F5F5] rounded-md p-2"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                  <label htmlFor="phone">phone</label>
                  <input
                    type="text"
                    id="phone"
                    className=" outline-none bg-[#F5F5F5] rounded-md p-2"
                    value={user.phone}
                    onChange={(e) =>
                      setUser({ ...user, phone: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    className="outline-none bg-[#F5F5F5] rounded-md p-2"
                    value={user.address.city}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        address: { ...user.address, city: e.target.value },
                      })
                    }
                  />
                  <label htmlFor="street">Street</label>
                  <input
                    type="text"
                    id="street"
                    className="outline-none bg-[#F5F5F5] rounded-md p-2"
                    value={user.address.street}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        address: { ...user.address, street: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <label htmlFor="number">Number</label>
                  <input
                    type="text"
                    id="number"
                    className="outline-none bg-[#F5F5F5] rounded-md p-2"
                    value={user.address.number}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        address: { ...user.address, number: e.target.value },
                      })
                    }
                  />
                  <label htmlFor="username">Zipcode</label>
                  <input
                    type="text"
                    id="zipcode"
                    className="outline-none bg-[#F5F5F5] rounded-md p-2"
                    value={user.address.zipcode}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        address: { ...user.address, zipcode: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
            )}
            <button
              onClick={() => handleUpdate()}
              className="bg-red-500 text-white p-2 rounded-md mt-4"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProtectedRoute(Profile);
