import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import NavBarOne from '../../Components/NavBarOne/NavBarOne'
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext/AuthProvider'
import Cookies from 'js-cookie'
import { decodeToken } from 'react-jwt'
import { useNavigate, useLocation } from 'react-router-dom'


// import SignUp from '../SignUp/SignUp'


const LoginForm = () => {

  const { register, control, handleSubmit, formState } = useForm(
    {
      defaultValues: {
        username: "",
        password: ""
      },
      mode: "onTouched",
    }
  );
  const { errors, isDirty } = formState


  const { isLoggedin, user, login } = useContext(AuthContext)
  const navigate = useNavigate()

  // const [jwtToken, setJwt] = useState()
  const onSubmit = (data) => {
    var val = {}
    axios.post("https://fakestoreapi.com/auth/login", data)
      .then((res) => {
        val = decodeToken(res.data.token)
        console.log(res.data.token)
        console.log("decoded token", val)
        login(val)

      }).catch((err) => {
        if (err.response.status === 401) {
          navigate("/login", { replace: true })
          alert("Invalid username or password")
          console.log(err)
        }


      })
    // console.log(data)
    // login(data);



    //   setJwt(res.data.token);
    // console.log(res.data.token)
    // })

    // console.log("login success" + isLoggedin)
    // console.log(user)
  }
  return (
    <>
      <NavBarOne />
      <div className='login-container jumbotron w-50 mx-auto mt-5' >
        <h1 className='text-success text-left'>Login</h1>
        <form className='form-group' onSubmit={handleSubmit(onSubmit)} noValidate>

          <label className='form-label'>Username</label>
          <input className={`form-control  ${errors.username ? "is-invalid" : `is-valid`} `} type="text" placeholder="Enter your username"
            {...register("username",
              {

                required: {
                  value: true,
                  message: "Username is required"
                }
              })

            } />
          {errors.username && <p className='text-danger'>{errors.username?.message}</p>}

          <label className='form-label'>Password</label>
          <input className={`form-control ${errors.password ? "is-invalid" : "is-valid"}`} type="text" placeholder="Enter your password"
            {...register("password",
              {
                required: {
                  value: true,
                  message: "Password is required"
                }
              }
            )} />
          <p className='text-danger'>{errors.password?.message}</p>


          <input className='btn btn-outline-success mt-3 form-control' type="submit"
            disabled={!isDirty} />
          <a href="/signup">Dont have an account?</a>
        </form>
        <DevTool control={control} />
      </div>
    </>
  )
}

export default LoginForm