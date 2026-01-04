import AddCustomer from "../components/customer/AddCustomer";
import SearchSort from "../components/customer/SearchSort";
import ClientTable from "../components/customer/ClientTable";


export default function page() {
  return (
    <div className='w-full flex flex-col pt-6 px-6 space-y-8'>

      {/* add customer */}
      <div className='flex justify-end'>
        <AddCustomer />
      </div>

      {/* Search sort */}
      <div className='flex justify-start'>
        <SearchSort />
      </div>

      <ClientTable />
    </div>
  )
}
