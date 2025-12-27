import React,{ useState } from 'react'

const App = () => {

  const [heading, setHeading] = useState('')
  const [desc, setDesc] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e =>{
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({heading,desc})

    setTask(copyTask)

    setHeading('')
    setDesc('')
  })

  const deleteNote=(idx) =>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }


  return (
    <div className='h-screen bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)}} 
        className='flex justify-evenly p-15 gap-15 items-start overflow-x-hidden'
      >
        
        <div className='flex flex-col gap-4 w-1/2'>
        <h1 className=' text-3xl italic'>Add Notes</h1>

          <input 
          type="text" 
          placeholder='Enter Heading' 
          className='px-5 py-2 border-2 rounded outline-none font-medium'
          value={heading}
          onChange={(e)=>{
            setHeading(e.target.value);
          }}/>

          <textarea 
          type="text" 
          placeholder='Enter Details' 
          className='px-5 py-2 border-2 rounded h-30 outline-none font-medium'
          value={desc}
          onChange={(e)=>{
            setDesc(e.target.value);
          }}/>

          <button className='px-5 py-2 rounded bg-white text-black outline-none font-medium active:scale-95 '>
            Add Note
          </button>

        </div>
        <img className='h-60 w-fit mt-10' src="https://plus.unsplash.com/premium_photo-1683309567810-4d232ee83d2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </form>
      <div className='mx-40 '>
        <h1 className='py-5 text-3xl italic'>Recent Notes</h1>
        <div className='flex flex-wrap gap-4 h-full'>
            {task.map(function(elem,idx){
              return <div 
              key={idx} 
              className='h-100 bg-[url("https://static.vecteezy.com/system/resources/previews/068/223/292/non_2x/page-of-torn-blank-white-paper-from-a-spiral-notebook-illustration-vector.jpg")] rounded w-72 bg-cover bg-center text-black p-10 relative '>
                <h2 className='text-lg uppercase font-bold leading-tight pb-1 wrap-break-word h-auto'>{elem.heading}</h2>
                <p className='wrap-break-word pb-4 h-auto'>{elem.desc}</p>
                <button onClick={()=>{
                  deleteNote(idx)
                }} className='bg-gray-400 m-8 w-1/2 py-2 rounded font-bold cursor-pointer active:hover:bg-red-200 bottom-0 absolute'>Delete</button>
              </div>
            })}
        </div>
        
      </div>
    </div>
  )
}

export default App
