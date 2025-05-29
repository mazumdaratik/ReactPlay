import React from 'react'

const User = ({user, deleteUser}) => {
   const {id, username} = user;

   const handleDelete = (id) => {
    deleteUser(id)
   }
  return (
    <article className='user'>
        <h3>{id}</h3>
        <p>{username}</p>
        <button className='bg-gray-400 rounded-sm text-white p-2 cursor-pointer'
        onClick={() => {handleDelete(id)}}
        >Delete</button>
    </article>
  )
}

export default User