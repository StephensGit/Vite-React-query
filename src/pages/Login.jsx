import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/userContext";

import FetchLogin from "../api/fetchLogin";

const Login = () => {
  const userContext = useContext(UserContext);
  const { setUser, user } = userContext;
  const navigate = useNavigate();
  const [requestParams, setRequestParams] = useState({
    email: "",
    password: "",
  });

  const { mutate: login } = useMutation(FetchLogin, {
    onSuccess: (data) => {
      setUser(data);
      navigate("/");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userDetails = {
          email: formData.get("email") ?? "",
          password: formData.get("password") ?? "",
        };
        setRequestParams(userDetails);
        login(userDetails);
      }}
    >
      <label htmlFor="email">
        Email
        <input id="email" name="email" placeholder="Email" />
      </label>
      <label htmlFor="password">
        Password
        <input id="" name="password" placeholder="Password" />
      </label>

      <button>Submit</button>
    </form>
  );
};

export default Login;
