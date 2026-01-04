"use client"
import  { useActionState, useEffect } from "react";
import { updateClientAction } from "../../actions/client.action";
import { toast } from "sonner"


export default function UpdateUserModal({closeModal, singleClient}) {
    const [state, formAction ] = useActionState(updateClientAction, null);

    useEffect(()=> {
        if(state?.success === true){
            toast.success("Client Updated succesfully");
            closeModal();
        } 
        else if(state?.success === false) {
            toast.error(state.message);
        }
    }, [state])
    
  return (
    <div className="h-screen backdrop-blur-md fixed inset-0 flex justify-center items-center z-500 ">
        <form 
        action={formAction}
        className='bg-white shadow-xl min-h-1/2 min-w- w-3/9 p-6 rounded-xl space-y-2 flex flex-col'>

            <input type="hidden" name="id" value={singleClient.id} />

        <div className="flex flex-col space-y-1">
            <label className="text -sm">
                Name
            </label>
            <input 
            name="name"
            type="text"
            defaultValue={singleClient.name}
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
            defaultValue={singleClient.email}
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
               defaultValue={singleClient.address}
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
                defaultValue={singleClient.phone_no}
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
               defaultValue={singleClient.organization}
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
                defaultValue={singleClient.project}
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
