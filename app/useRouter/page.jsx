"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

const UseRouter = () => {
  const router=useRouter();
  const navigation=(page)=>{
    router.push(page)
  }
  return (
    <div>
        <h1 className='text-center font-bold text-2xl'>useRouter</h1>
        <div className="routing-btns m-8">
          <button onClick={()=>navigation("/")} className='border-2 px-4  py-2 '>
            Home
          </button>
        </div>
    </div>
  )
}

export default UseRouter