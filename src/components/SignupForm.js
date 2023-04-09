import React from 'react'
import {AiOutlieEye, AiOutlineEyeInvisible} from "react/icon/ai"
import { useState } from 'react'


const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    function changeHandler (event){
        setFormData ( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

  return (
    <div>
        {/* Student instructor tab */}
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>
        <form >
            {/* First name and Last Name */}
            <div>
                <label>
                    <p>First Name <sup>*</sup></p>
                    <input
                        type="text"
                        required
                        name="firstName"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstName}
                    />
                </label>
                <label>
                    <p>Last Name <sup>*</sup></p>
                    <input
                        type="text"
                        required
                        name="lastName"
                        onChange={changeHandler}
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                    />
                </label>
            </div>
            {/* Email Address */}
            <label>
                <p>Email Address<sup>*</sup></p>
                <input
                    type="email"
                    required
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter Email Address"
                    value={formData.email}
                />
            </label>
            {/* create Password and Confirm Password */}
            <label>
                <p>Create Password<sup>*</sup></p>
                <input
                    type={showPassword ? ("text") : ("password")}
                    required
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="Create your password"
                    value={formData.pasword}
                />
                <span onClick={() => setShowPassword((prev) => !prev)} >
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlieEye/>) }
                </span>
            </label>
        </form>
    </div>
  )
}

export default SignupForm
