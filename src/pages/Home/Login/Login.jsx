import './Login.css';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate= useNavigate()
    const {signIn}= useContext(AuthContext)
    const onSubmits = data => {
        console.log(data)
        signIn(data.email,data.password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate('/')
        })
        .catch(error => {
            console.log(error)
           
        })
    
    }
   
    return (
        <>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse bg-base-200">

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

                                <input className="btn btn-primary" type="submit" value="Signup" />
                            </div>
                            <div>
                                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                            </div>
                        </form>
                        <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                    </div>
                    <div className="text-center lg:text-left md:w-1/2">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;