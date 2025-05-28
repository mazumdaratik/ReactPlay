import React, { useState } from 'react'
import Component2 from "./Component2"
import UserContext from './UserContext'

const Component1 = () => {
    const[user, setUser] = useState({
        id: 101,
        name: "Atik",
        age: 25,
    })
    const[add, setAdd] = useState("Dhaka")
  return (
    <UserContext.Provider value={{user, add}}>
        <Component2 />        
    </UserContext.Provider>
  )
}

export default Component1