import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const location = useLocation()

  const redirectPath = location.state?.from?.pathname || "/"
  const [user, setUser] = useState({})
  const navigate = useNavigate();

  const [isLoggedin, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedin")==="true"
  )

  useEffect(() => {
    
    console.log("user= ", user);
    console.log("isLoggedin= ",isLoggedin)
    console.log("getItem= ",localStorage.getItem("isLoggedin"))
  }, [user, isLoggedin])

  const login = useCallback((userData) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedin", true);
    setUser(userData);
    navigate(redirectPath, { replace: true })
    console.log("userData= ", userData);
    
  }, [redirectPath, navigate, setIsLoggedIn, setUser])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedin");
    setUser();
    navigate("/home", { replace: true });
    
  }, [navigate, setIsLoggedIn, setUser])


  return (
    <AuthContext.Provider value={{ isLoggedin, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider