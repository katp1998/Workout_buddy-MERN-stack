import React from 'react'
import { useState } from 'react'

function WorkoutForm() {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');

    const funcTitle = (e) =>{
        setTitle(e.target.value)
    }

    const funcLoad = (e) =>{
        setLoad(e.target.value)
    }

    const funcReps = (e) =>{
        setReps(e.target.value)
    }

    const onSubmit = async(e) =>{
        e.preventDefault(); //to avoid the page being refreshed
        const workout = {title, workout, reps}
        const response = await fetch('/api/workouts/create')
    }




  return (
    <form onSubmit={onSubmit} className="create">
        <h3>
            Add a new workout!
        </h3>
        <label>Exercise title: </label>
        <input type="text" onChange={funcTitle} value={title} />
        <label>Load (in kg): </label>
        <input type="number" onChange={funcLoad} value={load} />
        <label>Reps: </label>
        <input type="number" onChange={funcReps} value={reps} />

        <button>Add Workout</button>
    </form>
  )
}

export default WorkoutForm