import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import { logout, selectUser } from "../slices/userSlice";
import axios from "axios";
const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const Logout = (e) => {
    dispatch(logout());
  };

  const Pogout = async (e) => {
    e.preventDefault();

    console.log("pogout");
    console.log(user.token)

    let url = "http://localhost:3001/api/v1/products/all";

    await axios.get(url, {
      headers: {
        "x-access-token": user.token,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <form className="logout">
      <h1>
        Welcome <span className="user__name">{user.name}</span>!
      </h1>
      <button className="logout__button" onClick={(e) => Logout(e)}>
        Log out
      </button>
      <button className="logout__button" onClick={(e) => Pogout(e)}>
        get products
      </button>

      <img
        src="http://localhost:3001/public/products/1.jpg"
        alt="product"
      />

    </form>
  );
};

export default Logout;
