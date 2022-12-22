import React from 'react'
import { useRouter } from 'next/router'

function projectid() {
  const rout = useRouter()
  console.log(rout.pathname)
  console.log(rout.query)
  return (
    <div><h1>PortfolioPage?!</h1></div>
  )
}

export default projectid