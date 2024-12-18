// 'use client'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async ({params}) => {
    if(params.user=='sid') redirect("/")
  return (
    <div>Hello {(await params).user}</div>
  )
}

export default page