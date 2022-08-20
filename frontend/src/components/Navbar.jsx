import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {FaUser, FaSignOutAlt, FaSignInAlt} from 'react-icons/fa';
import {logout, reset} from '../features/auth/authSlice'
import {useSelector, useDispatch} from 'react-redux';

function Navbar() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth)

    const onLogout = () =>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
  
  return (
    <header className= "header">
        <div>
            <Link to="/">
                <h1>Workout Buddy</h1>
            </Link>
        </div>
        <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Navbar