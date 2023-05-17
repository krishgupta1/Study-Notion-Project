import React from 'react'
import { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const [showPassword , setShowPassword] = useState(false)
    
    function changeHandler(event) {
        setFormData ((prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

  return (
    <div>
      {/* Student-Instructor Tab */}
      <div>
        <button type="">
            Student
        </button>
        <button type="">
            Instructor
        </button>
      </div>

      <form>
        {/* First NAme and Last Name */}
        <div>
            <label>
                <p>
                    First Name <sup>*</sup>
                </p>
                <input
                type="text"
                required
                name="firstname"
                placeholder='Enter your first name'
                onChange={changeHandler}
                value={formData.firstName}
                />
            </label>
            <label>
                <p>
                    Last Name <sup>*</sup>
                </p>
                <input
                type="text"
                required
                name="lastName"
                placeholder='Enter your last name'
                onChange={changeHandler}
                value={formData.lastName}
                />
            </label>
        </div>

        {/* Email Address */}
        <div>
            <label>
                <p>
                    Email Address<sup>*</sup>
                </p>
                <input
                type="email"
                required
                name="email"
                placeholder='Enter email address'
                onChange={changeHandler}
                value={formData.email}
                />
            </label>
        </div>

        {/* Create Password and Confirm Password */}
        <div>
            <label>
                <p>
                    Create Password<sup>*</sup>
                </p>
                <input
                type={showPassword ? ("text") : ("password")}
                required
                name="createPassword"
                placeholder='Enter Password'
                onChange={changeHandler}
                value={formData.password}
                />
                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>
            </label>

            {/* Confirm Password */}

            <label>
                <p>
                    Confirm Password<sup>*</sup>
                </p>
                <input
                type={showPassword ? ("text") : ("password")}
                required
                name="confirmPassword"
                placeholder='Confirm Password'
                onChange={changeHandler}
                value={formData.confirmPassword}
                />
                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span> 
            </label>
        </div>

        <button>
            Create Account
        </button>

      </form>
    </div>
  )
}

export default SignupForm
