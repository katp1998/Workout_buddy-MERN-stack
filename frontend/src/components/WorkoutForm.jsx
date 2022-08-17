import React from 'react'
import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {createWorkout, reset} from '../features/workouts/workoutSlice'
import {toast} from 'react-toastify'


function WorkoutForm() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
    
   const [formData, setFormData] = useState({
        title: '',
        load: 0,
        reps: 0
    })

    const { title, load, reps } = formData

    //states from workoutSlice
    const { isError, isSuccess, isLoading, message} = useSelector((state) => state.workout)

    //to monitor the states
    useEffect(() =>{
        if(isError){
           toast.error(message) 
        }
        dispatch(reset())
    }, [isError, message, dispatch])


const onChange = (e) =>{
    //setting formData to prev state
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}

const onSubmit = (e) => {
    e.preventDefault();

    //get items from the form
    const enteredData = {title, load, reps}
    //put it into the function in workoutslice
    dispatch(createWorkout(enteredData))
}


  return (
    <form onSubmit={onSubmit} className="create">
        <h3>
            Add a new workout!
        </h3>
        <label>Exercise title: </label>
        <input type="text" onChange={onChange} name = "title" value={title} />
        <label>Load (in kg): </label>
        <input type="number" onChange={onChange} name = "load" value={load} />
        <label>Reps: </label>
        <input type="number" onChange={onChange} name = "reps" value={reps} />

        <button>Add Workout</button>
    </form>
  )
}

export default WorkoutForm