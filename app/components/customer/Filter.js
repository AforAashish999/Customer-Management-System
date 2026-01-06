'use client'
import {  useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const dropItems = [
  {label: "Filter by Organization", key: "organization", isDropdown: true},
  {label: "Filter by Project Status", key: "projectStatus", isDropdown: true}
]

const ProjectItems = [
  {label: "On Going"},
  {label: "Completed"},
  {label: "Pending"},
  {label: "Cancelled"},
  {label: "Untouched"}
]

export default function Filter() {
  // const [ open, setOpen] = useState(false);
  const [ activeDropDown, setActiveDropDown] = useState(false)

  return (
    <div className="bg-white  relative rounded-lg px-3 py-1.5 flex items-center gap-x-1 border-gray-300 border hover:bg-gray-300  ">
      <button 
        onClick={()=>setActiveDropDown(!activeDropDown)}
      className="flex items-center cursor-pointer" >
        <CiFilter  className="text-[#27ac52] text-xl" />
        <p className="text-gray-600">Filter </p>
      </button>
      
      {
        open && (
          <div className="absolute top-10 bg-white rounded-md w-56 left-0 p-3 space-y-2">
                        {
                            dropItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => {
                                        setActive(item.label)
                                        setOpen(false)
                                    }}
                                    className={`text-sm text-gray-600 p-1 rounded-md cursor-pointer font-semibold w-full text-left
                                          ${item.label === active
                                            ? 'bg-[#27ac52] text-white  '
                                            : 'hover:bg-[#27ac52] hover:text-white  '
                                        }   `}
                                >
                                  <div className="flex items-center gap-x-1">
                                     {item.label}
                                     {
                                      item.label === active? <IoIosArrowDown className="text-white text-lg font-bold" /> : <IoIosArrowDown className="text-black text-lg font-bold" />
                                     }
                                    <IoIosArrowDown className="text-white text-lg font-bold" />
                                  </div>
                                   
                                </button>
                            ))
                        }
                    </div>
        )
      }

    </div>
  )
}
