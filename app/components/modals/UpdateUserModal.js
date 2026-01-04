"use client"
// import { useForm } from "react-hook-form";
import  { useActionState } from "react";
import { createClientAction } from "../../actions/client.action";


export default function UpdateUserModal({closeModal}) {
    const [state, formAction ] = useActionState(createClientAction, null);
 

  return (
    <div className="h-screen backdrop-blur-md fixed inset-0 flex justify-center items-center z-500 ">
        <form 
        action={formAction}
        className='bg-white shadow-xl min-h-1/2 min-w- w-3/9 p-6 rounded-xl space-y-2 flex flex-col'>

<div>
    
</div>
        <div className="flex flex-col space-y-1">
            <label className="text -sm">
                Name
            </label>
            <input 
            name="name"
            type="text"
            placeholder='Enter new customer name'
            className='bg-white focus:outline-none rounded-lg p-2 caret-green-500 opacity-50 border '
            />
        </div>

        <div className="flex flex-col space-y-1">
              <label>
                Email
            </label>
            <input 
            name="email"
            type="email"
            placeholder='Enter new customer email'
            className='bg-white  w- fit focus:outline-none rounded-lg p-2 caret-green-500 opacity-50 border'
            />

        </div>

             <div className="flex flex-col space-y-1">
              <label>
                Address
            </label>
            <input 
            name="address"
            type="text"
            placeholder='Enter new customer address'
            className='bg-white  w- fit focus:outline-none rounded-lg p-2 caret-green-500 opacity-50 border'
            />

        </div>

        <div className="flex flex-col space-y-1">
              <label>
                Contact No
            </label>
            <input 
            name="phone_no"
            type="number"
            placeholder='Enter new customer phone number'
            className='bg-white w- fit focus:outline-none rounded-lg p-2 caret-green-500 opacity-50 border'
            />

        </div>

        <div className="flex flex-col space-y-1">
             <label>
                 Organization
            </label>
            <input 
            name="organization"
            type="text"
            placeholder='Enter new customer phone number'
            className='bg-white w- fit focus:outline-none rounded-lg p-2 caret-green-500 opacity-50 border'
            />

        </div>

        <div className="flex flex-col space-y-1">
             <label>
                Project
            </label>
            <input 
            name="project"
            type="text"
            placeholder='Enter project name'
            className='bg-white focus:outline-none rounded-lg p-2 caret-green-500 opacity-50 border'
            />

        </div>

            <div className='flex gap-6 pt-3'>
                <button
                type="submit"
                className='flex-1 bg-[#27ac52] hover:bg-[#00bf63] cursor-pointer transition-all duration-100 ease-in text-white py-2 rounded-2xl font-semibold '>
                    Submit
                </button>
                <button
                type="button"
                onClick={closeModal}
                className='flex-1 bg-[#27ac52] hover:bg-[#00bf63] cursor-pointer transition-all duration-100 ease-in text-white rounded-2xl font-semibold '>
                    Cancel
                </button>
            </div>

             {state?.success === false && (
        <p style={{ color: "red" }}>{state.message}</p>
      )}

        </form>
    </div>
  )
}
