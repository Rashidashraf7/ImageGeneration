import { createContext } from "react";
export const AppContext = createContext();
import { useState } from "react";



 const AppContextProvider = (props ) => {
    const [user, setUser] = useState(true);

    const value={
        user,setUser
    }

    return (
        <AppContext.Provider value={value}>
        {props.children}

        </AppContext.Provider>
    )
}

export default AppContextProvider;
