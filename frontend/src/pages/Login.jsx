import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useState, useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
      }
    
    const onSubmit = (e) => {
        e.preventDefault()
        //const userData = { email, password}
        //dispatch(login(userData))
    
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