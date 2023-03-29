import React, { useReducer } from "react";

import UserContext from "./userContext";
import UserReducer from "./userReducer";

import { GET_USER, SET_LOADING } from "./types";

const UserState = (props) => {
  const initialState = {
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  //   Get User
  const setUser = (user) => {
    setLoading();
    const data = user;

    dispatch({
      type: GET_USER,
      payload: data,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        setUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
