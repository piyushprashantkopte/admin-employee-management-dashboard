import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData,setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(taskTitle,taskDescription,taskDate)
        setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
        
        const data = userData
        data.forEach(elem => {
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
            }
        })
        setUserData(data)

        setAssignTo('')
        setCategory('')
        setTaskDate('')
        setTaskDescription('')
        setTaskTitle('')
    }
  return (
    <div>
    <form onSubmit={(e)=> {
        submitHandler(e)
    }} className='flex flex-wrap w-fullitems-start justify-between'>
        <div className='w-1/2'>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
            value={taskTitle} 
            onChange={(e)=>{
                setTaskTitle(e.target.value)
            }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Assign a task title' />
        </div>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
            value={taskDate}
            onChange={(e)=>{
                setTaskDate(e.target.value)
            }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
        </div>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
            value={assignTo}
            onChange={(e)=>{
                setAssignTo(e.target.value)
            }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
        </div>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
            value={category}
            onChange={(e)=>{
                setCategory(e.target.value)
            }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
        </div>
        </div>

        <div className='w-2/5 flex-co. items-start'>
            <h3>Description</h3>
            <textarea value={taskDescription}
            onChange={(e)=>{
                setTaskDescription(e.target.value)
            }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' col="30" rows={10}></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
        
        
    </form>
  </div>
  )
}

export default CreateTask
