import React from 'react'

const Read = (props) => {
    let Notes = props.Notes
    let setNotes = props.setNotes
    let renderNotes = Notes.map((note,index) => {
        return (
            <div key={index} className='flex justify-between p-2 border border-blue-500 m-3 bg-blue-400 rounded'>
                <div>
                    <h2 className='font-semibold text-white text-3xl mb-1'>{note.title}</h2>
                    <p className='text-white text-xl'>{note.description}</p>
                </div>
                <div className='flex items-start flex-col'>
                    <button className='mb-2'>imp</button>
                    <button onClick={() => deleteHandler(note.id)} className=' mr-4 border rounded py-0.5 px-2'>Delete</button>
                </div>
            </div>
        )
    })
    const deleteHandler = (id) =>{
        const filternotes = Notes.filter((note)=>note.id !== id)
        setNotes(filternotes);
    }
    return (
        <div>
            <h1 className=' text-4xl font-semibold text-black-500 mb-3'>My Notes</h1>
            <h3 className='text-lg text-gray-400'>Your daily notes that remind you</h3>
            {renderNotes}
        </div>
    )
}

export default Read