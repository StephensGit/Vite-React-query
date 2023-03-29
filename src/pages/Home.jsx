import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Shops from "../components/Shops";
import UserContext from "../context/userContext";

const Home = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  console.log(user, "user");
  return (
    <div>
      {user && <h1>Hello {user?.name}</h1>}
      <Link to="/login">Login</Link>
      <h1>Select from the list of shops below to se more information!</h1>

      <Shops />
    </div>
  );
};

export default Home;
