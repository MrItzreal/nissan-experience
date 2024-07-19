/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import useVehicles from "../hooks/useVehicles";

export const AppContext = createContext({});

export default function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const { loading, vehicles } = useVehicles();

  return (
    <AppContext.Provider value={{ loading, vehicles }}>
      {children}
    </AppContext.Provider>
  );
}

/*
-createContext is the setup: It creates the context container and sets its default value, which can be anything. 

-useAppContext is the access point: It lets components "hook into" the context and get its values "aka" lets
you use the context in different components.

-AppContextProvider is the distributor: It provides the actual values to the context so that components can access them by wrapping the entire routing structure lets say in app.jsx. 

NOTE:
This pattern allows to share data across different component hierarchy without having to manually pass props ("prop drilling").  
*/
