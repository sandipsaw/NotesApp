import React from 'react'
import { useState } from 'react'
const Create = (props) => {
    let Notes = props.Notes
    let setNotes = props.setNotes

    const [Title, setTitle] = useState("")
    const [description, setdescription] = useState("")

    const SubmitHandler = (e) => {
        e.preventDefault()
        let newnotes = {
            title: Title,
            description: description,
        }
        let copynotes = [...Notes, newnotes]
        setNotes(copynotes)
    }
    return (
        <div>
            <div className=''>
                <h1 className='mb-3 text-4xl font-semibold text-blue-500'>Create Notes</h1>
                <form onSubmit={SubmitHandler} className='text-xl p-2 '>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={Title}
                        type="text"
                        className=' outline-none mb-2'
                        placeholder='Title' />
                    <br />
                    <textarea
                        onChange={(e) => setdescription(e.target.value)}
                        value={description}
                        type="text"
                        className='outline-none text mb-2 w-[20%] h-[10%]'
                        placeholder='notes' />
                    <br />
                    <button
                        className='bg-blue-300 border-blue-300 border mb-2 rounded py-1 px-2 '>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create