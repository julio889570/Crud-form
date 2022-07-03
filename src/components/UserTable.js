import React from 'react'

export default function userTable({users, editRow, deleteUser}) {
  console.log(users)
  return (
    <div>
      <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
        </tr>
        </thead>
            <tbody>
                {
                  users.length > 0 ?
                    users.map(user =>(
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.userName}</td>
                    <td>
                        <button 
                        className='button muted-button'
                          onClick={()=>{editRow(user)}}
                        >Edit</button>


                        <button
                         className='button muted-button' 
                        onClick={()=>{deleteUser(user.id)}}
                        >Delete</button>
                    </td>
                   </tr>
                    )):(
                      <tr>
                        <td colSpan={3}>No users</td>
                      </tr>
                    )
                }
                
            </tbody>
      </table>
    </div>
  )
}
