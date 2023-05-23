import React from 'react'
import { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import {toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const navigate = useNavigate();
    const [showPassword , setShowPassword] = useState(false);
    const [showConfirmPassword , setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData ((prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created")
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("Printing Final Account Data");
        console.log(accountData);
        navigate("/dashboard");
        console.log("I'm in dashboard")
    }

  return (
    <div>
      {/* Student-Instructor Tab */}
      <div 
        className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

        <button
            className={`${accountType === "student"
        ?
        "bg-richblack-900  text-richblack-5"
        : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setAccountType("student")} >
            Student
        </button>

        <button
        className={`${accountType === "instructor"
        ?
        "bg-richblack-900  text-richblack-5"
        : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setAccountType ("instructor")}>
            Instructor
        </button>
        
      </div>

      <form  onSubmit={submitHandler}>
        {/* First NAme and Last Name */}
        <div className='flex gap-x-4 mx-0 mt-[10px]'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    First Name<sup  className='text-pink-200'>*</sup>
                </p>
                <input
                type="text"
                required
                name="firstName"
                placeholder='Enter your first name'
                onChange={changeHandler}
                value={formData.firstName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Last Name <sup  className='text-pink-200'>*</sup>
                </p>
                <input
                type="text"
                required
                name="lastName"
                placeholder='Enter your last name'
                onChange={changeHandler}
                value={formData.lastName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
        </div>

        {/* Email Address */}
        <div className='mt-[10px]'>
            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address<sup  className='text-pink-200'>*</sup>
                </p>
                <input
                type="email"
                required
                name="email"
                placeholder='Enter email address'
                onChange={changeHandler}
                value={formData.email}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
        </div>

        {/* Create Password and Confirm Password */}
        <div className='w-full flex gap-x-4 mx-0 mt-[10px]'>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Create Password<sup  className='text-pink-200'>*</sup>
                </p>
                <input
                type={showPassword ? ("text") : ("password")}
                required
                name="password"
                placeholder='Enter Password'
                onChange={changeHandler}
                value={formData.password}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
                <span 
                    className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>

            {/* Confirm Password */}

            <label className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Confirm Password<sup  className='text-pink-200'>*</sup>
                </p>
                <input
                type={showConfirmPassword ? ("text") : ("password")}
                required
                name="confirmPassword"
                placeholder='Confirm Password'
                onChange={changeHandler}
                value={formData.confirmPassword}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
                <span
                    className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                    {showConfirmPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
                </span> 
            </label>
        </div>

        <button className=' w-full bg-yellow-50 rounded-[8px] font-med text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account
        </button>

      </form>
    </div>
  )
}

export default SignupForm
