"use client"
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import AddUserModal from "../modals/AddUserModal";

export default function AddCustomer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-green-600 text-white px-8 py-3 flex items-center rounded-lg gap-x-2">
        <IoMdAdd className="text-white text-2xl" />
        <p> Add new Customer</p>
      </button>

      {
        open &&
      
          <AddUserModal
            closeModal={() => setOpen(false)} />
      
      }

    </div>
  )
}
