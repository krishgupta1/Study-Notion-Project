import React, { useState } from 'react';
import {AiOutlieEye, AiOutlineEyeInvisible} from "react/icon/ai"

const LoginForm = () => {

    const [formData, setFormData] = useState({
        email:"", password:""
    })

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler (event){
        setFormData ( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
  return (
    <form action="">
        <label htmlFor="">
            <p>Email Address<sup>*</sup></p>
            <input
                type='email'
                required 
                name="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter Email Address'
            />
        </label>
        <label htmlFor="">
            <p>Password<sup>*</sup></p>
            <input
                type={showPassword ? ("text") : (password) }
                required 
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
            />

            <span onClick={() => setShowPassword((prev) => !prev)} >
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlieEye/>) }
            </span>

            <Link to="#">
                <p>
                    Forgot Password
                </p>
            </Link>
        </label>
        <button>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm

