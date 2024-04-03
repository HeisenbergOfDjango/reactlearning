import React from 'react'

const UserCard = (props) => { //can give any name to props
  const {name, age, email} = props
  return (
    <div>
      <h1>hello Name, Age, Email</h1>
      <h1>Hello {name}, {age}, {email}</h1>
    </div>
  )
}

export default UserCard
