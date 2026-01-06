"use client";
// import { useState, useEffect } from "react";
// import { PiSortAscendingBold } from "react-icons/pi";
// import { useSearchParams, useRouter } from "next/navigation";

// const dropItems = [
//     { label: "Created Recently", value: "desc" },
//     { label: "Created Previously", value: "asc" }
// ]

// export default function Sort() {
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const [open, setOpen] = useState(false);
//     const [active, setActive] = useState("desc")

//         const currentLabel = dropItems.find( item => item.value === active )?.label || "";
//     // params.set(key, value)
//     useEffect(() => {
//         const params = new URLSearchParams(searchParams.toString());

//         if (active === "desc" || active === "asc") {
//             params.set("_sort", "created_at")
//             params.set("_order", active)
//         }
//         else {
//             params.delete("_sort", "created_at")
//             params.delete("_order", active)
//         }
//         router.replace(`/clients?${params.toString()}`)

//     }, [active])
//     return (
//         <div className=" relative bg-white rounded-lg px-3 py-1.5  border-gray-300 hover:bg-gray-300  border  ">
//             <button
//                 onClick={() => setOpen(!open)}
//                 className="flex items-center gap-x-1 cursor-pointer ">
//                 <PiSortAscendingBold className="text-[#27ac52] text-xl" />
//                 <p className="text-gray-600">Sort </p>

//             </button>

//             {
//                 open && (
//                     <div className="absolute top-10 bg-white rounded-md w-40 left-0 p-3 space-y-2">
//                         {
//                             dropItems.map((item) => (
//                                 <button
//                                     key={item.label}
//                                     onClick={() => {
//                                         setActive(item.value)
//                                         setOpen(false)
//                                     }}
//                                      className={`text-sm text-gray-600 p-1 rounded-md cursor-pointer font-semibold w-full text-left
//                                           ${
//                                             item.value === active
//                                               ? 'bg-[#27ac52] text-white  '
//                                               : 'hover:bg-[#27ac52] hover:text-white  '
//                                           }   `}
//                                 >
//                                     {item.label}
//                                 </button>
//                             ))
//                         }
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

// added sorting by name option

import { useState, useEffect } from "react";
import { PiSortAscendingBold } from "react-icons/pi";
import { useSearchParams, useRouter } from "next/navigation";

const dropItems = [
    { label: "Created Recently", value: "desc", sortBy: "created_at" },
    { label: "Created Previously", value: "asc", sortBy: "created_at" },
    { label: "Name: A to Z", value: "asc", sortBy: "name" },
    { label: "Name: Z to A", value: "desc", sortBy: "name" }
]

export default function Sort() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Created Recently")

    // params.set(key, value)
    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        const selectedItem = dropItems.find(item => item.label === active);
        if (selectedItem) {
            params.set("_sort", selectedItem.sortBy)
            params.set("_order", selectedItem.value)
        }
        else {
            params.delete("_sort", selectedItem.sortBy)
            params.delete("_order", selectedItem.value)
        }
        router.replace(`/clients?${params.toString()}`)

    }, [active])
    return (
        <div className=" relative bg-white rounded-lg px-3 py-1.5  border-gray-300 hover:bg-gray-300  border  ">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-x-1 cursor-pointer ">
                <PiSortAscendingBold className="text-[#27ac52] text-xl" />
                <p className="text-gray-600">Sort </p>

            </button>

            {
                open && (
                    <div className="absolute top-10 bg-white rounded-md w-40 left-0 p-3 space-y-2">
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
