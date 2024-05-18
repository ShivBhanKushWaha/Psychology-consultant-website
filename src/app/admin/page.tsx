'use client'
import React, { useState } from 'react'

const page = () => {
  const [admin, setAdmin] = useState(false)

  if (!admin) {
    return (
      <div className="flex items-center justify-center">
        <p>You are not admin</p>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center">
      <p>Are You Admin</p>
      <button>Login</button>
    </div>
  )
}

export default page