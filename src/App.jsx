import React, { useEffect, useState } from 'react'
import axios from "axios";
import Cards from './components/Cards.jsx';
const App = () => {

  const [data, setdata] = useState([])
  const [index, setindex] = useState(1)



  const content = async () => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=8`);
      setdata(response.data)
  }
        useEffect(()=>{
        content()
      }, [index])

  let checkContent  = <h3 className='font-bold text-2xl'>Loading....</h3>

  if (data.length>0) {
    checkContent = data.map((elem, idx)=>{
      return (
         <div  key={idx}>

        <Cards elem = {elem}/>

        </div>
      )
    })
  }
  

  return (
    <div className='bg-black min-h-screen h-full w-screen p-4'>
                
          <div className=' text-yellow-100 text-2xl flex-wrap gap-10 p-6 flex  '>
      { checkContent} 

      </div>
      <div className='flex items-center justify-center gap-4'>
      <button onClick={()=>{
        if (index>1) {
          setindex(index-1)
          setdata([])
        }
      }}
      style={{opacity: index == 1 ? 0.6 : 1}}
      className='bg bg-yellow-300 text-xl text-black p-2 rounded-2xl w-20 h-10 font-semibold cursor-pointer active:bg-taupe-300 active:scale-90 shadow-md  hover:shadow-amber-700 shadow-amber-300'>Prev</button>

      <h1 className='font-semibold font-sans text-lg text-white'>Page no. {index}</h1>
 

      <button onClick={()=>{
        setindex(index+1)
      setdata([])}
      }
         className='bg bg-yellow-300 text-xl text-black p-2 rounded-2xl w-20 h-10 font-semibold cursor-pointer active:bg-taupe-300 active:scale-90 shadow-md  hover:shadow-amber-700 shadow-amber-300'>Next</button>
      </div>
    </div>


  )

}

export default App
