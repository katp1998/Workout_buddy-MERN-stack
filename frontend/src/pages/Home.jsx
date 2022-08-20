import React from 'react'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//methods
import { fetchAllWorkouts, reset } from '../features/workouts/workoutSlice'

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'


function Home() {
  const navigate = useNavigate()
  const dispatch =  useDispatch()
  
  //states
  const { user } = useSelector((state) => state.auth)
  const {workouts, isLoading, isSuccess, isError, message} = useSelector((state) => state.workout)
  

  useEffect(() =>{
    if(isError){
      console.log("THIS IS THE ERROR");
    }
    if (user){
      dispatch(fetchAllWorkouts())
    }else{
      navigate('/login')
    }
    
    return () => {
      dispatch(reset())
    }

  }, [user, navigate, dispatch, isError, message])
  
  
  
  return (
    <div className='home'>
      {workouts.length > 0 ?(
      <div className="workouts">
        {workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout = {workout}/>
        ))}
      </div>) : (<h3>You don't have any workouts added!</h3>)}
      <WorkoutForm />
    </div>
  )
}

export default Home