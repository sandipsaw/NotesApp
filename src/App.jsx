import React from 'react'
import "./style.css"
import { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'
const App = () => {
  const [Notes, setNotes] = useState([
    {
      title: "Morning Walk",
      description: "Jogging and morning walk in the park",
    },
    {
      title: "Metting",
      description: "Metting with clients for the Requirement",
    },
    {
      title: "Project",
      description: "it need some Hardworkers and engineer",
    },
    {
      title: "Go to Market",
      description: "Shopping some grocery for Household",
    }
  ])

  return (
    <div className='w-screen h-full bg-white p-4'>
      <Read Notes={Notes} setNotes={setNotes} />
      <Create Notes={Notes} setNotes={setNotes}/>
    </div>
  )
}

export default App