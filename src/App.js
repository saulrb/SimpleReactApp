import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'
import { User } from './components/Users/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (user: User) => {
    setUsersList((prevUsersList: User[]) => {
      return [...prevUsersList, user]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  )
}

export default App
