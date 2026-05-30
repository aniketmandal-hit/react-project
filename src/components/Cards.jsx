import React from 'react'

const Cards = (props) => {
  return (
    <div>
       
          <a href={props.elem.download_url} target='_black'>
            <div className='bg-white w-70 h-50 rounded-2xl shadow-md hover:shadow-lg hover:shadow-blue-300 shadow-gray-300'>
            <img className='h-full w-full object-cover rounded-2xl' src={props.elem.download_url} alt="Nil" />
            </div>
            <h1 className='text-amber-200 pt-1.5 font-bold text-lg'>{props.elem.author}</h1>
          </a>
        </div>
  )
}

export default Cards
