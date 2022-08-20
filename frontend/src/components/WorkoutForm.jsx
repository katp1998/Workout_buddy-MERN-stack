import React from 'react'
import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {createWorkout, reset} from '../features/workouts/workoutSlice'
import {toast} from 'react-toastify'


function WorkoutForm() {
   const dispatch = useDispatch();
    
   const [title, setTitle] = useState('')
   const [load, setLoad] = useState('')
   const [reps, setReps] = useState('')

const onSubmit = (e) => {
    e.preventDefault();
    const userData = {title, load, reps}
    dispatch(createWorkout(userData))
    setTitle('')
    setReps('')
    setLoad('')
}


  return (
    <form onSubmit={onSubmit} className="create">
        <h3>
            Add a new workout!
        </h3>
        <label>* Exercise title: </label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} name = "title" value={title} />
        <label>* Load (in kg): </label>
        <input type="number" onChange={(e) => setLoad(e.target.value)} name = "load" value={load} />
        <label>* Reps: </label>
        <input type="number" onChange={(e) => setReps(e.target.value)} name = "reps" value={reps} />
        <button>Add Workout</button>
    </form>
  )
}

export default WorkoutForm