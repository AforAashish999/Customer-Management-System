import { CiFilter } from "react-icons/ci";

import React from 'react'

export default function Filter() {
  return (
    <div className="bg-white w- 36 rounded-lg px-3 py-1.5 flex items-center gap-x-1 border-gray-300 border  ">
        <CiFilter  className="text-[#27ac52] text-xl" />
        <p className="text-gray-600">Filter </p>
    </div>
  )
}
