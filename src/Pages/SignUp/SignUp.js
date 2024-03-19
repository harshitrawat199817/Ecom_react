import React from 'react'
import NavBarOne from '../../Components/NavBarOne/NavBarOne'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import axios from 'axios';

const SignUp = () => {

    const { register, control, handleSubmit, getValues, formState } = useForm(
        {
            defaultValues: {
                username: "",
                email: "",
                fullName: {
                    firstName: "",
                    lastName: ""
                },
                address: {
                    addressLine1: "",
                    addressLine2: "",
                    city: "",
                    state: "",
                    country: "",
                    pincode: ""
                },
                password: "",
                confirmPassword: ""
            },
            mode: "onTouched",

        }
    );
    const { errors, isDirty } = formState;
    return (
        <>
            <NavBarOne />
            <form className='login-container jumbotron w-50 mx-auto mt-5' onSubmit={handleSubmit((data) => console.log(data))}>
                <h1 className='text-success'>Sign Up</h1>

                <label className='form-label'>Email</label>
                <input className={`form-control  ${errors.email ? "is-invalid" : `is-valid`} `} type="text" placeholder="Enter your email"
                    {...register("email",
                        {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                            },
                            validate: async (value) => {
                                const response = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${value}`).catch((err) => console.log(err + "email error"))

                                console.log(response);
                                return response.data.length !== 0 ? "Email already in use" : true

                            },
                        }

                    )} />
                <errors className='text-danger'>{errors.email?.message}</errors>

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
                            },
                            validate: async (value) => {
                                const response = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${value}`).catch((err) => console.log(err + "user error"))
                                console.log(response + "username");
                                return response.data.length === 0 ? true : "Username already in use"

                            }
                        }
                    )} />
                <errors className='text-danger'>{errors.username?.message}</errors>

                <div>
                    <label className='form-label'>First Name</label>
                    <input className={`form-control  ${errors.fullName?.firstName ? "is-invalid" : `is-valid`} `} type="text" placeholder="Enter your first name"
                        {...register("fullName.firstName", {
                            required: {
                                value: true,
                                message: "First Name is required"
                            },
                        }
                        )} />
                    <errors className='text-danger'>{errors.fullName?.firstName?.message}</errors>

                    <label className='form-label'>Last Name</label>
                    <input className={`form-control  ${errors.fullName?.lastName ? "is-invalid" : `is-valid`} `} type="text" placeholder="Enter your last name"
                        {...register("fullName.lastName", {
                            required: {
                                value: true,
                                message: "Last Name is required"
                            },
                        }
                        )} />
                </div>

                <div>
                    <label className='form-label'>Address Line 1</label>
                    <input className={`form-control  ${errors.address?.addressLine1 ? "is-invalid" : `is-valid`} `} type="text" placeholder="Enter your address line 1"
                        {...register("address.addressLine1", {
                            required: {
                                value: true,
                                message: "Address Line 1 is required"
                            },
                        }
                        )} />
                    <errors className='text-danger'>{errors.address?.addressLine1?.message}</errors>

                    <label className='form-label'>Address Line 2</label>
                    <input className={`form-control  ${errors.address?.addressLine2 ? "is-invalid" : `is-valid`} `} type="text" placeholder="Enter your address line 2 (optional)"
                        {...register("address.addressLine2")}
                    />

                    <label className='form-label'>City</label>
                    <input className={`form-control  ${errors.address?.city ? "is-invalid" : `is-valid`} `} type="text" placeholder="Enter your city"
                        {...register("address.city", {
                            required: {
                                value: true,
                                message: "City is required"
                            },
                        }
                        )} />
                    <errors className='text-danger'>{errors.address?.city?.message}</errors>

                    <label className='form-label'>State</label>
                    <input className={`form-control  ${errors.address?.state ? "is-invalid" : `is-valid`} `} type="text" placeholder="Enter your state"
                        {...register("address.state", {
                            required: {
                                value: true,
                                message: "State is required"
                            },
                        })}
                    />
                    <errors className='text-danger'>{errors.address?.state?.message}</errors>

                    <label className='form-label'>Country</label>
                    <input className={`form-control  ${errors.address?.country ? "is-invalid" : `is-valid`} `} type="text" placeholder="Enter your country"
                        {...register("address.country", {
                            required: {
                                value: true,
                                message: "Country is required"
                            },
                        })}
                    />
                    <errors className='text-danger'>{errors.address?.country?.message}</errors>

                    <label className='form-label'>Zip Code</label>
                    <input className={`form-control  ${errors.address?.zipCode ? "is-invalid" : `is-valid`} `} type="text" placeholder="Enter your zip code"
                        {...register("address.zipCode", {
                            required: {
                                value: true,
                                message: "Zip Code is required"
                            },
                        })}
                    />
                    <errors className='text-danger'>{errors.address?.zipCode?.message}</errors>
                </div>


                <label className='form-label'>Password</label>
                <input className={`form-control  ${errors.password ? "is-invalid" : `is-valid`} `} type="text" placeholder="Enter your password"
                    {...register("password",
                        {
                            required: {
                                value: true,
                                message: "Password is required"
                            },
                            pattern: {
                                value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
                                message: "Password must contain letters and numbers"
                            },
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters"
                            }
                        }
                    )
                    } />
                <errors className='text-danger'>{errors.password?.message}</errors>

                <label className='form-label'>Confirm Password</label>
                <input className={`form-control  ${errors.confirmPassword ? "is-invalid" : `is-valid`} `} type="text" placeholder="Enter your password"
                    {...register("confirmPassword",
                        {
                            required: {
                                value: true,
                                message: "Confirm Password is required"
                            },

                            validate: {
                                matchesPassword: (value) => {
                                    const password = getValues("password");
                                    console.log(password, value);
                                    return password === value || "Passwords do not match";
                                }
                            }

                        }
                    )} />
                <errors className='text-danger'>{errors.confirmPassword?.message}</errors>

                <input className='btn btn-outline-success mt-3 form-control' type="submit"
                    disabled={!isDirty} />
                <a href="/login">Already have an account?</a>
            </form>
            <DevTool control={control} />
        </>
    )
}

export default SignUp