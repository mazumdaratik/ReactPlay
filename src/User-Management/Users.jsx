import React from 'react'
import User from './User'
import UsersContext from './context/UsersContext'
import { useContext } from 'react'

const Users = () => {
  const {users, deleteUser} = useContext(UsersContext)
  return (
    <section className='users'>
        {users.map ( (user )=> (
          <User key={user.id} user={user} deleteUser={deleteUser}/>
          ))}
    </section>
  )
}

export default Users