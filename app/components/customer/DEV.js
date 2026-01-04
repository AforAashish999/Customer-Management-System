"use client"
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { deleteClientAction } from "../../actions/client.action";
import UpdateUserModal from "../modals/UpdateUserModal";

export default function DEV({id}) {
  const [view, setView] = useState(true);
  const [update, setUpdate] = useState(false);
  return (
    <div className="flex gap-x-2 justify- around">
      <button
       onClick={()=>setView(!view)}
       className="text-gray-500 cursor-pointer transform transition-all duration-100 hover:text-gray-400 hover:scale-110 " 
       >
        {view?  <FaEyeSlash /> :  <FaEye/>}
      </button>
    
      <button
      onClick={()=> setUpdate(!update)}
      >
        <GrDocumentUpdate className="cursor-pointer text-[#27ac52] transition-all transform ease-in duration-100 hover:scale-110 "/>
      </button>
        <button
         onClick={()=> deleteClientAction(id)}
        >
        <MdDeleteForever className="text-red-500 text-xl transform transition-all ease-in duration-300 hover:rotate-180 cursor-pointer " />
        </button>

        {/* update modal */}
        {update && 
        <UpdateUserModal closeModal={() => setUpdate(false)}  />
        }
    </div>
  )
}
