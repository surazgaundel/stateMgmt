import React from 'react'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';


export default function Form() {
    
    const schema=yup.object().shape({
        userId:yup.string().required("userID is required"),
        email:yup.string().email().required('email is required'),
        age:yup.number().positive().integer().min(18).required(),
        password:yup.string().min(6).max(12).required(),
        confirmPassword:yup.string().oneOf([yup.ref('password'),null],'Password not match').required('password required')
    })
    const {register, handleSubmit, formState:{errors} }=useForm({
        resolver:yupResolver(schema)
    });

    function onSubmit(data) {
        console.log(data)
    }
  return (
    <div>Form
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="userid" placeholder="User ID"{...register('userId')}/>
            <p>{errors.userId?.message}</p>
            <input type="email" name="email" placeholder='Email'{...register('email')}/>
            <p>{errors.email?.message}</p>
            <input type="number" name="age" placeholder='Age'{...register('age')}/>
            <p>{errors.age?.message}</p>
            <input type="password" placeholder='Password..'{...register('password')}/>
            <p>{errors.password?.message}</p>
            <input type="password" name="confirmPassword" placeholder='ConfirmPassword'{...register('confirmPassword')}/>
            <p>{errors.confirmPassword?.message}</p>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
