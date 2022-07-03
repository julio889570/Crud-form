import React from 'react'
import { useForm } from 'react-hook-form'

export default function AddUserForm(props) {
const {register, handleSubmit, formState:{errors}} = useForm();
function onSubmit(data, event){
    console.log(data)
    props.addUser(data)
    event.target.reset();
}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type='text' {...register("name", {required: true}) }/>
        {errors.name && <span>This field is required</span>}
        <label>UserName</label>
        <input type='text' {...register("userName", {required:true})} />
        {errors.username && <span>This field is required</span>}
        <button>Add new user</button>
    </form>
  )
}
