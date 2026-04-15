import { createContext, useState } from "react";
const AuthContext = createContext(null);


function AuthProvider({children}) {
    const [user, setUser] = useState({name:'', age: 0, isAuth: false})

    function loginUser(name,age){
        setUser({name, age, isAuth: true})
  }
    function logoutUser(event){
        setUser({name:'', age: 0, isAuth: false})
  }       

    return(
        <AuthContext.Provider value={{user, loginUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };

