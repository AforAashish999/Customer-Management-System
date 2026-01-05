import React from 'react'

export default function ViewUserModal({singleClient, closeModal}) {
  return (
    <div className="h-screen  fixed inset-0 flex justify-center items-center z-500 "> 

<div className='bg-white p-8 space-y-12'>
    <h1 className='text-green-500 text-3xl font-semibold'> {singleClient.project} </h1>
   <ul className='space-y-6 text-xl'>
    <li> Name: {singleClient.name} </li>
    <li> Email: {singleClient.email}  </li>
    <li> Address: {singleClient.address} </li>
    <li> Contact No: {singleClient.phone_no}  </li>
    <li> organization: {singleClient.organization} </li>
   </ul>
   <button
    onClick={closeModal}
   className='bg-[#27ac52] py-2 w-full hover:bg-[#00bf63] cursor-pointer transition-all duration-100 ease-in text-white rounded-2xl font-semibold'>
     Close </button>

</div>
    </div>
  )
}
