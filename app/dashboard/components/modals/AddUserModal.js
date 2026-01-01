"use client"
import { useForm } from "react-hook-form";

export default function AddUserModal({closeModal}) {
    const { register, handleSubmit, formState:{errors}, reset } = useForm();

    const onSubmit = () => {
        console.log("im")
    }

  return (
    <div className="h-screen bg-black/50 fixed inset-0 flex justify-center items-center ">
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className='bg-gray-200 min-h-1/2 min-w- w-3/9 p-6 rounded-xl space-y-2 flex flex-col'>

        <div className="flex flex-col space-y-1">
            <label className="text -sm">
                Name
            </label>
            <input 
            type="text"
            placeholder='Enter new customer name'
            className='bg-white focus:outline-none rounded-lg p-2 caret-green-500 opacity-50 '
            />

        </div>

        <div className="flex flex-col space-y-1">
              <label>
                Email
            </label>
            <input 
            type="email"
            placeholder='Enter new customer email'
            className='bg-white  w- fit focus:outline-none rounded-lg p-2 caret-green-500 opacity-50'
            />

        </div>

        <div className="flex flex-col space-y-1">
              <label>
                Contact No
            </label>
            <input 
            type="number"
            placeholder='Enter new customer phone number'
            className='bg-white w- fit focus:outline-none rounded-lg p-2 caret-green-500 opacity-50'
            />

        </div>

        <div className="flex flex-col space-y-1">
             <label>
                 Organization
            </label>
            <input 
            type="text"
            placeholder='Enter new customer phone number'
            className='bg-white w- fit focus:outline-none rounded-lg p-2 caret-green-500 opacity-50'
            />

        </div>

        <div className="flex flex-col space-y-1">
             <label>
                Project
            </label>
            <input 
            type="text"
            placeholder='Enter project name'
            className='bg-white focus:outline-none rounded-lg p-2 caret-green-500 opacity-50'
            />

        </div>

            <div className='flex gap-6 pt-3'>
                <button
                className='flex-1 bg-green-600 text-white py-2 rounded-2xl font-semibold '>
                    Submit
                </button>
                <button
                onClick={closeModal}
                className='flex-1 bg-green-600 text-white rounded-2xl font-semibold '>
                    Cancel
                </button>
            </div>
        </form>
    </div>
  )
}
