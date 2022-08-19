import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteWorkout} from '../features/workouts/workoutSlice'

function WorkoutDetails({workout}) {
  const dispatch =useDispatch();

  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <button onClick = {() => dispatch(deleteWorkout(workout._id))}>X</button>
    </div>
  )
}

export default WorkoutDetails