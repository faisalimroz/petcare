import { useContext, useState } from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {signIn}=useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const navigate=useNavigate()
    const onSubmits=(data)=>{
        console.log(data)
        signIn(data.email,data.password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate('/')
        })
        .catch(error=>{
            console.log(error)
            setLoginError(error)
        })

    }
    return (

        <>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse bg-amber-200">

                    <div className="card md:w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmits)}>

                            <div className="form-control ">
                                <label className="label" htmlFor="email">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register('email')} name='email' placeholder="email" className="input input-bordered" />
                            </div>


                            <div className="form-control ">
                                <label className="label" htmlFor="password">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register('password')} name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div>
                            {loginError && <p>{loginError}</p>}
                        </div>
                        </form>
                        <p className='text-center'>Don't have an account? <Link to='/signup'>Signup</Link></p>
                    </div>
                    <div className="text-center lg:text-left md:w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        Here is the Login in page. In this page you can sign in to our website. you just enter your email and password 
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;