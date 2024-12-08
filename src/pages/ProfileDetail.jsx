import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ProfileDetail = () => {
  const params = useParams()
  const [data, setData] = useState([])
  const  navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${params.id}`)
        .then((res)=>res.data)
        .then((result)=>setData(result))
        .catch(err=>console.log("error->",err))
    },[])

    const handleDelete = (id)=>{
     if (window.confirm("Do you really want to delete this user?")){
        axios.delete(`http://localhost:3000/users/${id}`)
        .then((res)=>navigate('/'))
        .catch(err=>console.log("error->",err))
      }
     
    }
  return (
    <div className='flex w-full h-screen justify-center items-center bg-[#f9fafb]'>
      <div className="mx-auto bg-white w-[400px] h-[200px] flex flex-col justify-between border border-gray-300 px-6 py-4 rounded-xl">
        <div className="">
          <h1 className='text-[18px] font-semibold'>User FirstName : {data.name} </h1>
          <h3 className=' font-medium'>User LastName : {data.lastName} </h3>
        </div>
        <div className="flex space-x-1 justify-end">
          <Link to={`/update/${params.id}`} className='border border-green-700 text-green-700 px-4 py-2 rounded-xl hover:bg-green-700 hover:text-white'>Update</Link>
          <button onClick={()=>handleDelete(params.id)} className='border border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-4 py-2 rounded-xl' >Delete</button>
        </div>
      </div>

    </div>
  )
}

export default ProfileDetail