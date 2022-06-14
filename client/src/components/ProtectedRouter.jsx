import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({ page }) => {
  const isAuth = false

  if (!isAuth) {
    return <Navigate to='/' />
  }

  return (
    <div>{page}</div>
  )
}

export default ProtectedRouter