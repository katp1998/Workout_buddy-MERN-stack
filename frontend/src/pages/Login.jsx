import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useState, useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {login, reset} from '../features/auth/authSlice'
import {toast} from 'react-toastify'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

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
    if(isSuccess || user){
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
        const userData = { email, password}
        dispatch(login(userData))
    
      }
    return (
    <>
    <section className='heading'>
        <h1>
            <FaSignInAlt />  Login
            <p>Start setting your workout routines!</p>
        </h1>
    </section>
    <section className='form'>
        <form onSubmit = {onSubmit}>
            <div className="form-group">
                <input type="text" className='form-control' id="email" name = "email" value = {email} placeholder = "Enter email" onChange={onChange} />
            </div>
            <div className="form-group">
                <input type="text" className='form-control' id="password" name = "password" value = {password} placeholder = "Enter password" onChange={onChange} />
            </div>
            <div className='form-group'>
                <button type="submit" className='btn btn-block'>Login</button>
            </div>
        </form>
    </section>
    
    
    </>
  )
}

export default Login