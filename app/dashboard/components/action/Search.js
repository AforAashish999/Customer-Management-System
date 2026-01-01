import React from 'react'
import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
       
    <div className='bg-white flex justify-between py-1 px-1 rounded-lg'>

        <div className='flex items-center'>
         <FiSearch />
        <input 
        type="text"
        placeholder='Type your customer name...'
        className='bg- white p-2 focus:outline-none'
        />
        </div>

        <button className='bg-green-500 rounded-md px-2 text-white'>
            Search
        </button>
       
    </div>
 
  )
}
