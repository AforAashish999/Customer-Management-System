// import { api } from  '../../../lib/axios'
import axios from 'axios'
import EDV from '../components/action/EDV.js'
import Search from '../components/action/Search.js'
import AddCustomer from '../components/action/AddCustomer.js'



export default async function CUSTOMERS() {
  // const url = process.env.API_URL;
  // const { data } = await api.get("/customers")
  // const { data } = await axios.get(`${process.env.API_URL}/customers`);

  // const res = await fetch(`${process.env.API_URL}/customers`);
  const res = await fetch('http://localhost:5000/customers')
  const data = await res.json()

  return (
    <div className='min-h-screen w-full flex flex-col justify- center pt-10 px-6 items -center  space-y-6 '>

 <div className="flex justify-end">
    <AddCustomer />  
 </div>

  <div className='flex justify- start '>
    <Search />
  </div>
    
      <table className=' w-full rounded-lg overflow-hidden'>
        <thead className=''>
          <tr className='bg-gray-200'>
            <th className=' tracking-wide px -15 py- 5'> Project </th>
            <th className=' tracking-wide px- 20 py- '> Name </th>
            <th className=' tracking-wide px- 25 py-5'> Contact </th>
            <th className=' tracking-wide px- 20 py -5'> Address </th>
            <th className=' tracking-wide px- 15 py- 5'> Actions </th>
          </tr>
        </thead>

        <tbody className='min-h-40'>
          {
            data.map((item) => (
              <tr key={item.id}>
                <td className='bg-gray-50 p-2'> {item.project} </td>
                <td className='bg-gray-50 p-2'> {item.name} </td>
                <td className='bg-gray-50  p-2 fl ex flex- col'>  <p>{item.email}</p> <p>{item.phone_no}</p> </td>
                <td className='bg-gray-50 p-2'> {item.address} </td>
                <td className='bg-gray-50 p-2'> <EDV /> </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
