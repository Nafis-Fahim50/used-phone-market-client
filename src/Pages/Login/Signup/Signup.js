import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Signup = () => {
    const { createUser, updateUser} = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignup = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successufully Signup');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                .then(()=>{})
                .catch(err=>toast.error(err.message))
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-10  shadow-xl rounded-xl'>
                <h2 className='text-xl text-center font-bold text-green-500'>Please Register</h2>
                <form onSubmit={handleSubmit(handleSignup)} >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" placeholder='Enter Name'
                            {...register('name', { required: 'Name is required' })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600 mt-2' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" placeholder='Enter Email'
                            {...register('email', { required: 'Email is required' })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600 mt-2' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" placeholder='Enter Password'
                            {...register('password', {
                                required: 'Password must required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                pattern: { value: /(?=.*[0-9])/, message: 'Password must have number' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600 mt-2' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-success text-white w-full mt-5 mb-2' value="Signup" type="submit" />
                </form>
                <p>Already Have an Account? <Link className='text-green-500 font-bold' to="/signin">Please Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;