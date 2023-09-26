import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = ({ users }) => {
  return (
    <Card className={`${classes.container} ${classes.users} `}>
      <h3 className={classes.title}>List of Users</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} ({user.age} years old )
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList
