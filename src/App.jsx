import React from 'react'

const App = () => {

  const submitHandler = (e =>{
    e.preventDefault()
  })

  //const [heading, setHeading] = useState(second)

  return (
    <div className='h-screen bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex justify-evenly p-15 gap-15 pt-25 items-start overflow-x-hidden'>
        <div className='flex flex-col gap-5 w-1/2'>
          <input type="text" placeholder='Enter Heading' className='px-5 py-2 border-2 rounded outline-none font-medium'/>
          <textarea type="text" placeholder='Enter Details' className='px-5 py-2 border-2 rounded h-30 outline-none font-medium'/>
          <button className='px-5 py-2 rounded bg-white text-black outline-none font-medium'>Add Note</button>
        </div>
        <img className='h-60 ' src="https://plus.unsplash.com/premium_photo-1683309567810-4d232ee83d2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </form>
      <div className='px-40 bg-gray-900 '>
        <h1 className='py-3 text-3xl italic'>Your Notes</h1>
        <div></div>
        
      </div>
    </div>
  )
}

export default App
