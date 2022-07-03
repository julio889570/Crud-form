import React from 'react'
import { useForm } from 'react-hook-form';

export default function EditUserForm(props) {
    const {register, handleSubmit, setValue, formState:{errors}} = useForm({
        defaultValues: props.currentUser
    });
    setValue('name', props.currentUser.name)
    setValue('userName', props.currentUser.userName)
    function onSubmit(data, event){
        console.log(data)

        props.updateUser(props.currentUser.id, data)
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
            <button>Edit user</button>
        </form>
      )
    }
    