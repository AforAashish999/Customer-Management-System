import { deleteClientAction } from "../../actions/client.action"

export default function DeleteUserModal({id, closeModal}) {

  return (
      <div className="h-screen backdrop- blur- md fixed inset-0 flex justify-center items-center z-500 ">
        
        <div className='h-1/2 w-1/2 bg-white rounded-lg p-12 space-y-6 '>
            <h1 className='text-gray-500 text-3xl font-medium  '> 
                Are you sure you want to delete this user?
                 </h1>

            <div className="flex gap-6 pt-3">
            <button 
            onClick={()=> deleteClientAction(id)}
            className="flex-1 bg-[#27ac52] text-white  py-2 rounded-2xl font-semibold transform transition-all ease-in duration-200 cursor-pointer hover:scale-102 hover:-translate-y-1 hover:bg-[#00bf63] shadow-lg"
            > Confirm
             </button>

            <button
            onClick={closeModal}
            className="flex-1 bg-gray-500 hover:bg-gray-300  transition-all duration-200 ease-in text-white rounded-2xl font-semibold hover:scale-102 cursor-pointer hover:-translate-y-1"
            >
                Cancel
            </button>
            </div>

        </div>
         </div>
  )
}
