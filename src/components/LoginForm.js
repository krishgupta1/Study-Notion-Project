import React, { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const {formData, setFormData} = useState( {
        email:"" , password:""
    })

    const[showPassword, setShowPassword] = useState(false)    

    
    function changeHandler(event) {
        setFormData ((prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

  return (
    <form action="">
        <label htmlFor="">
            <p>
                Email Address<sup>*</sup>
            </p>
            <input
             type="email"
             name="email"
             value={formData.email}
             onChange={changeHandler}
             placeholder='Enter Email Address'
             required
            />
        </label>
        <label htmlFor="">
            <p>
                Password<sup>*</sup>
            </p>
            <input
             type={showPassword ? ("text") : ("password")}
             value={formData.password}
             name="password"
             onChange={changeHandler}
             placeholder='Enter Your Password'
             required
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
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


