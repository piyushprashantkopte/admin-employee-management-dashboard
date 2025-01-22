import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)
    
  return (
    <div className='bg-[#1C1C1C] p-5 rounde mt-5 h-48'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed Task</h5>
        </div>

        <div className='h-[80%] overflow-auto'>
        {userData.map(function(elem,idx){
            return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskNumbers.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskNumbers.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-400'>{elem.taskNumbers.failed}</h5>
            </div>
    })}
        </div>
            
        
      
    </div>
  )
}

export default AllTask
