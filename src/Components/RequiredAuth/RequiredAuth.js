import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext/AuthProvider'
import { useLocation } from 'react-router-dom'

const { isLoggedIn } = useContext(AuthContext)

const location = useLocation()
const RequiredAuth = ({ children }) => {
    return (
        <>
            {
                isLoggedIn ?
                    children : <Navigate to="/login"  state={{ from: location }} replace/>
            }
        </>
    )
}

export default RequiredAuth