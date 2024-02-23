import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import NavBarOne from '../../Components/NavBarOne/NavBarOne'



const Login = () => {

  const { register, control, handleSubmit, formState } = useForm();
  const {errors}= formState
  return (
    <>
    <NavBarOne/>
    <div className='login-container jumbotron w-50 mx-auto mt-5' >
      <h1 className='text-success text-left'>Login</h1>
      <form className='form-group' onSubmit={handleSubmit((data) => console.log(data))} noValidate>

        <label className='form-label'>Username</label>
        <input className={`form-control  ${errors.username ? "is-invalid" : `is-valid`} `} type="text" placeholder="Enter your username"
          {...register("username",
            {
              
              required: {
                value: true,
                message: "Username is required"
              },

              pattern: {
                value: /^[a-z0-9]+$/i,
                message: "Username can only contain letters and numbers"
              }
            })

          } />
          <errors className='text-danger'>{errors.username?.message}</errors>

        <label className='form-label'>Password</label>
        <input className={`form-control ${errors.password ? "is-invalid" : "is-valid" }`} type="text" placeholder="Enter your password" 
        {...register("password",
          {
            required: {
              value: true,
              message: "Password is required"
            }
          }
        )} />


        <input className='btn btn-outline-success mt-3 form-control' type="submit" />
      </form>
      <DevTool control={control} />
    </div>
    </>
  )
}

export default Login