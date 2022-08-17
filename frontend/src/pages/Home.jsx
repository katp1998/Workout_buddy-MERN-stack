import React from 'react'
import {useEffect, useState} from 'react'

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'


function Home() {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() =>{
    //fetch all workouts
    const fetchWorkouts = async () =>{
      const response = await fetch('/api/workouts/all')
      const json = await response.json();

      if (response.ok){
        setWorkouts(json)
      }
    }
    fetchWorkouts()
  }, [])
  
  
  
  return (
    <div className='home'>
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout = {workout}/>
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home