'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function Container() {
  const route = useRouter()
  // useEffect(()=>{
  //   route.replace('/login')
  // },[])
  return (
    <div className='bg-orange-600'>
      <Link href='/login'>Login</Link>
      <Link href='/register'>Register</Link>
      <Link href='/todoList'>TodoList</Link>
    </div>
  )
}

export default Container