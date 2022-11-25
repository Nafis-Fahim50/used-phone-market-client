import React, { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {
    const {userLogin, providerLogin} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider();

    const handleLogin = data => {
        userLogin(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            getUserToken(data.email)
            toast.success('Successfully login')
        })
        .catch(err =>{
            toast.error(err.message)
        })
    }

    const handleGoogleLogin = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('Succssfully login')
        })
    }

    const getUserToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data =>{
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
                navigate(from,{replace:true})
            }
        })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7  shadow-xl rounded-xl'>
                <h2 className='text-xl text-center font-bold text-green-500'>Please Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" placeholder='Enter Email'
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600 mt-2' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" placeholder='Enter Password'
                            {...register("password", {
                                required: "Password is required",
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600 mt-2' role="alert">{errors.password?.message}</p>}
                        <p className='my-2'>Forget Password? <button type='button' className='btn-link text-green-500 hover:text-red-500'>Reset Password</button></p>
                    </div>
                    <input className='btn btn-success text-white hover:bg-green-600 w-full' value="Login" type="submit" />
                </form>
                <p className='mt-2'>Don't Have an Account?</p>
                <Link className='text-green-500 hover:text-blue-500 font-bold' to="/signup">Create a New Account</Link>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline text-green-500 w-full'><FaGoogle className='inline mr-2 text-red-500'></FaGoogle>Login in With Google</button>
            </div>
        </div>
    );
};

export default SignIn;