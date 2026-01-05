"use client";
import { useState, useEffect } from "react";
import { PiSortAscendingBold } from "react-icons/pi";
import { useSearchParams, useRouter } from "next/navigation";

const dropItems = [
    {label: "Created Recently", value:"desc"},
    {label: "Created Previously", value:"asc"}
]

export default function Sort() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Created Recently")

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        if(active === "Created Recently"){
            params.set("_sort=created_at&_order=desc")
        } else if (active === "Created Previously"){
            params.set("_sort=created_at&_order=asc")
         }
         else{
            params.delete("_sort")
         }

         router.replace(`/clients?${params.toString()}`)
         
 }, [active])
  return (
    <div className=" relative bg-white rounded-lg px-3 py-1.5  border-gray-300 border  ">
            <button
            onClick={()=> setOpen(!open)}
            className="flex items-center gap-x-1 cursor-pointer"> 
        <PiSortAscendingBold className="text-[#27ac52] text-xl" />
        <p className="text-gray-600">Sort </p>

            </button>

        {
            open && (
                <div className="absolute top-10 bg-white rounded-md w-40 left-0 p-3 space-y-2">
                    {
                        dropItems.map((item) => (
                            <button 
                            key={item.value}
                            onClick={()=> {
                                setActive(item.label) 
                                setOpen(false)
                            }}
                            className={`text-sm text-gray-600 p-1 rounded-md cursor-pointer font-semibold w-full text-left ${
                                active === item.label? "bg-[#27ac52] text-white  " : "hover:bg-[#27ac52] hover:text-white  "
                            }`}
                            > 
                                {item.label}
                            </button>
                        ))
                    }
                 
                </div>
            )
        }
    </div>
  )
}
