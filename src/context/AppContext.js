import { createContext, useReducer, useId } from "react";

export const ACTION_LIST = {
  DELETE_USER: "DELETE_USER",
  ADD_USER: "ADD_USER",
};

const appReducers = (state, action) => {
  switch (action.type) {
    case ACTION_LIST.ADD_USER:
      return { ...state, users: [...state.users, action.payload.formData] };
    case ACTION_LIST.DELETE_USER:
      const temp = state.users.filter((user) => user.id !== action.payload);
      return { ...state, users: temp };
    default:
      return { ...state };
  }
};

export const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const randomData = [
    {
      name: "Hasan",
      address: "Alradar ,Tartous",
      number: "0991898979",
      email: "sudo.hroot@gmail.com",
      id: useId(),
    },
    {
      name: "Hasan",
      address: "Alradar ,Tartous",
      number: "0991898979",
      email: "sudo.hroot@gmail.com",
      id: useId(),
    },
    {
      name: "Hasan",
      address: "Alradar ,Tartous",
      number: "0991898979",
      email: "sudo.hroot@gmail.com",
      id: useId(),
    },
    {
      name: "Hasan",
      address: "Alradar ,Tartous",
      number: "0991898979",
      email: "sudo.hroot@gmail.com",
      id: useId(),
    },
    {
      name: "Hasan",
      address: "Alradar ,Tartous",
      number: "0991898979",
      email: "sudo.hroot@gmail.com",
      id: useId(),
    },
  ];

  const initialState = {
    users: randomData,
  };

  const [state, dispatch] = useReducer(appReducers, initialState);

  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;
