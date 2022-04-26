import { createContext, useReducer, useEffect, useRef, useState } from "react";
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
      let tempData = state.users;
      action.payload.forEach((select) => {
        tempData = tempData.filter((user) => user.id !== select);
      });
      console.log(tempData);
      return { ...state, users: tempData };
    case ACTION_LIST.UPDATE_USERS_LIST:
      return { users: [...action.payload] };
    default:
      return { ...state };
  }
};

export const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const toastRef = useRef();
  const [userSelect, setUserSelect] = useState([]);
  const initialState = [];

  const [state, dispatch] = useReducer(appReducers, initialState);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10").then((data) => {
      const temp = data.data.results.map((user) => {
        return {
          name: `${user.name.first} ${user.name.last}`,
          address: user.location.city,
          email: user.email,
          number: user.cell,
          id: user.login.uuid,
        };
      });
      dispatch({ type: ACTION_LIST.UPDATE_USERS_LIST, payload: temp });
    });
  }, []);

  return (
    <appContext.Provider
      value={{ state, dispatch, toastRef, setUserSelect, userSelect }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;
