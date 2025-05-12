import { useState } from "react"

const UserList = () => {
    const [users, setUsers] = useState([
        {
            id: crypto.randomUUID(),
            name: "Atik",
            address: "Bangladesh"
        }
    ])

    function changeUser(id, name){
        console.log(id, name);
        const userCopy = [...users];

        const found = userCopy.find( (user) => user.id === id)
        found.name = name;

        setUsers(userCopy)
    }

    function addUser(){
        const newUser = {
            id: crypto.randomUUID(),
            name: "Samiul",
            address: "Dhaka"
        }

        setUsers([...users, newUser]);
    }

  return (
    <div className="flex flex-col m-4">
        <ul>
            {
                users.map( (user) => (
                    <li key={user.id} className="flex border shadow-black mb-4 p-2">
                        <p className="m-2">
                            {user.name} lives in {user.address}
                        </p>
                        <button
                            className = "underline cursor-pointer"
                            onClick={ () => changeUser(user.id, "Random")}
                        >
                            Change 
                        </button>
                    </li>
                ))
            }
        </ul>

        <button className="bg-gray-700 rounded-2xl my-2 cursor-pointer text-white"
        onClick={addUser}>
            Add
        </button>
    </div>
  )
}

export default UserList