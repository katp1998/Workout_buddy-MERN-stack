import React from 'react'
import { useState, useEffect } from 'react'
import {FaUserAlt} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const {name, email, password, confirmPassword} = formData

    //states from authSlice
  const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth)

  //monitor states
  useEffect(()=>{
    //if isError state = true
    if(isError){
      toast.error(message)
    }
    //if isSuccess {and user} states = true
    //if(user){navigate('/')} --> does not work
    if(isSuccess){
      navigate('/login')
    }

    if(user){
      navigate('/')
    }

    dispatch(reset())
  }, [user,isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            toast.error('Passwords do not match')
          }else{
            //get items coming from the form
            const userData = {name, email, password}
            //put the user data into the register function in authService through authSlice
            dispatch(register(userData))
          }
        }
        

  return (
    <>
    <section className="heading">
        <h1>
            <FaUserAlt/> Register
            <p>Create an account and start setting workouts</p>
        </h1>
    </section>
    <section className="form">
        <form onSubmit = {onSubmit}>
            <div className="form-group">
                <input type="text" className='form-control' id = "name" name = "name" value={name} placeholder="Enter your name" onChange={onChange}/>
            </div>
            <div className="form-group">
                <input type="text" className='form-control' id = "email" name = "email" value={email} placeholder="Enter your email address" onChange={onChange}/>
            </div>
            <div className="form-group">
                <input type="password" className='form-control' id = "password" name = "password" value={password} placeholder="Enter your password" onChange={onChange}/>
            </div>
            <div className="form-group">
                <input type="password" className='form-control' id = "confirmPassword" name = "confirmPassword" value={confirmPassword} placeholder="Confirm password" onChange={onChange}/>
            </div>
            <div className='form-group'>
                <button type="submit" className='btn btn-block'>Submit</button>
            </div>
        </form>
    </section>
    
    </>
  )
}

export default Register