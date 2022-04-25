import { createContext, useReducer, useState, useEffect } from "react";
import axios from "axios";

export const ACTION_LIST = {
  DELETE_USER: "DELETE_USER",
  ADD_USER: "ADD_USER",
  UPDATE_USERS_LIST: "UPDATE_USERS_LIST",
};

const appReducers = (state, action) => {
  switch (action.type) {
    case ACTION_LIST.ADD_USER:
      return { ...state, users: [...state.users, action.payload.formData] };
    case ACTION_LIST.DELETE_USER:
      const temp = state.users.filter((user) => user.id !== action.payload);
      return { ...state, users: temp };
    case ACTION_LIST.UPDATE_USERS_LIST:
      return { users: [...action.payload] };
    default:
      return { ...state };
  }
};

export const appContext = createContext();

const AppContextProvider = ({ children }) => {
  // const [initialState, setInitialState] = useState({ users: [] });

  const initialState = [];

  const [state, dispatch] = useReducer(appReducers, initialState);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then((data) => {
      const temp = data.data.results.map((user) => {
        return {
          name: `${user.name.first} ${user.name.last}`,
          address: user.location.city,
          email: user.email,
          number: user.cell,
        };
      });
      dispatch({ type: ACTION_LIST.UPDATE_USERS_LIST, payload: temp });
      console.log(temp);
    });
  }, []);

  // setInitialState(handleUsersFetching());

  // console.log(handleUsersFetching());

  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;
