'use client'
import React from 'react'

const Project = ({params}) => {
  return (
    <div>
        All Routes
        {
            params.all.map(p=><p>{p}</p>)
        }
    </div>
  )
}

export default Project