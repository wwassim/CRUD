import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const {id} = useParams()
  const  navigate = useNavigate();
  const[data,setData]= useState   ({
    name:"",
    lastName:""
  })
  const getUser = ()=>{
    axios.get(`http://localhost:3000/users/${id}`)
    .then((res)=>{setData(res.data)})
    .catch(err=>console.log("error->",err))
  }
  useEffect(()=>{
    getUser()
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.put(`http://localhost:3000/users/${id}`,data)
    .then((res)=>{console.log(res);navigate('/')})
    .catch(err=>console.log("error->",err.message))
  }

  return (
    <div className='flex w-full h-screen justify-center items-center  bg-[#f9fafb]'>
    <div className="mx-auto w-[320px] px-6 py-4 border border-gray-500 rounded-lg flex flex-col space-y-3 items-start bg-white">
      <p className='font-serif text-[26px] text-gray-700'>Update the User</p>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-2 w-full'>
        <div className="w-full ">
        <p className='text-[24px] text-gray-400'>Name</p>
        <input value={data?.name} onChange={(e)=>setData({...data,name:e.target.value})}  type="text" className='py-2 px-2 outline-none border border-gray-700 rounded-lg w-full' placeholder='foulen' />
        </div>
        <div className="w-full">

        <p className='text-[24px] text-gray-400'>LastName</p>
        <input value={data?.lastName}  onChange={(e)=>setData({...data,lastName:e.target.value})} type="text" className='py-2 px-2 outline-none border border-gray-700 rounded-lg w-full' placeholder='benfoulen'/>
        </div >
        
        <button className='w-full py-2 bg-black text-white rounded-xl text-center text-[18px]'>Update +</button>
      </form>
    </div>
    </div>
  )
}

export default Update