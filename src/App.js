import './App.css';
import {nanoid} from 'nanoid'
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import { useState } from 'react';
import EditUserForm from './components/EditUserForm';

function App() {
  const userData = [
    {id:nanoid(), name: 'Tania', userName:'floppydiskette'},
    {id:nanoid(), name: 'Craig', userName:'floppy1234'},
    {id:nanoid(), name: 'Jhon', userName:'Cdroom'}
  ]

  const [users, setUsers] = useState(userData);

  const addUser = (user)=>{
    user.id = nanoid();
    setUsers([
      ...users,
      user

    ])
  }

  //Delete user

  const deleteUser = (id)=>{
      const arrayFilter = users.filter(user=> (user.id !== id))
      
      setUsers(arrayFilter);
  }

  //Edit User
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '' , userName:''
  })

  const editRow = (user)=>{
        setEditing(true);
        setCurrentUser({
          id: user.id, name: user.name, userName: user.userName
        })

  }
      function updateUser(id, updatedUser){
        setEditing(false);
        setUsers(users.map(user=>(user.id=== id ? updatedUser : user)))
      }


  return (
    <div className="container">
     <h1>CRUD App with Hooks</h1>
       <div className='flex-row'>
          <div className='flex-large'>
        {editing ? (
          <div>
             <h2>Edit User</h2>
          <EditUserForm 
          currentUser={currentUser}
          updateUser={updateUser}
          />
          
          </div>
         
        ):(
          <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser}/>
          </div>    
        )}
          </div>
          <div className='flex-large'>
            <h2>View users</h2>
            <UserTable users={users}
             deleteUser={deleteUser}
              editRow={editRow}/>
          </div>
       </div>
    </div>
  );
}

export default App;
