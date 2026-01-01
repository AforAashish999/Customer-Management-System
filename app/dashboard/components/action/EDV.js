"use client"
import { FaEdit } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

export default function EDV() {
  return (
    <div className="flex justify-around">
        <FaEdit />
        <GrDocumentUpdate />
        <MdDeleteForever />
    </div>
  )
}
