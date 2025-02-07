import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {
  const logoutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
//    window.location.reload()
  }
//  const [username, setUsername] = useState('')

//  if(!data){
//    setUsername('Admin')

//  }else{
//    setUsername(data.firstName)
//  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'> User 👋</span></h1>   {/*changing the name according */}
      <button onClick={logoutUser} className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
