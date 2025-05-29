import React, { useState } from 'react'
import UsersContext from './context/UsersContext';
import { useContext } from 'react';

const NewUser = () => {
    const { addUser } = useContext(UsersContext)
    const[newUser, setNewUser] = useState("");

    const handleChange = (event) => {
        setNewUser(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const addNew = {
            id: new Date().getTime().toString(),
            username: newUser,
        }
        addUser(addNew)
        setNewUser("")

    }

  return (
    <div>
        <h3 className='text-3xl'>Users Registration</h3>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name='username'
            placeholder='Enter user...'
            onChange={handleChange}
            value={newUser}
            className='bg-gray-400 text-white border-gray-900 rounded-sm p-1 m-3'
            />
            <button 
            type='submit'
            className='bg-gray-600 cursor-pointer text-white border-gray-300 rounded-sm p-1 m-3'
            >Add User</button>
        </form>
    </div>
  )
}

export default NewUser