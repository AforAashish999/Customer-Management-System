"use client"
import { usePathname } from 'next/navigation'

export default function DashHeading() {
      const dashItems = [
        {  label: "Dashboard", href: "/" },
        { label: "Clients", href: "/clients" },
        {  label: "Settings", href: "/settings" },
        {  label: "Transactions", href: "/transactions" }
    ]
    const pathName = usePathname();
    const currentPath = dashItems.find((item) => item.href === pathName )

  return (
        <div className="h-18 flex items-center pl-12 bg-white border-gray-200 border-b ">
                      <h1 className="text-4xl font-semibold text-gray-600 ">
                        {currentPath? currentPath.label : 'Dashboard'}
                      </h1>
                </div> 
  )
}
