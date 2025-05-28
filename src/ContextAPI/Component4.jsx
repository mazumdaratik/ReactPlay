import React, {useContext} from 'react'
import UserContext from './UserContext'

const Component4 = () => {
    const {user, add} = useContext(UserContext)

  return (
    <div>
        <p>{user.id} is {user.name} and {user.age} years old live in {add}</p> 
    </div>
  )
}

export default Component4