import { useContext ,useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Signup.css';

import {app} from '../../../Firebase/Firebase.config';
import { getAuth, updateProfile } from 'firebase/auth';

import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider';



const Signup = () => {
    const auth = getAuth(app)
    const { register, handleSubmit, formState: { errors } } = useForm();
     const navigate=useNavigate()
     const [signUpError,setSignUpError]=useState('')
     const img_hosting_token = '6fb68cbd4232c1e20fa193c68ca16ae7';
const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
     const {createUser,updateUser,verifyEmail}=useContext(AuthContext)
     const handleSignup = async (data) => {
        console.log(data);
        setSignUpError('');
    
        try {
          // Create user in Firebase
          const user = await createUser(data.email, data.password);
    
          // Verify email
          await verifyEmail(user);
    
          // Navigate to home page
          navigate('/home');
    
          console.log('Email verified');
    
          // Create user info for Firebase update
          const userInfo = {
            displayName: data.name,
          };
    
          // Update Firebase user profile
          await updateUser(userInfo);
    
          // Upload image to imgBB
          if (data.profilePicture) {
            const formData = new FormData();
            formData.append('image', data.profilePicture[0]);
    
            const response = await fetch(img_hosting_url, {
              method: 'POST',
              body: formData,
            });
    
            const imgBBData = await response.json();
    
            // Update Firebase user profile with image URL
            await updateProfile(auth.currentUser, { photoURL: imgBBData.data.url });
          }
    
          // Save user data to your server
          saveUser(data.name, data.email);
    
        } catch (error) {
          console.log(error);
          setSignUpError(error.message);
        }
      };
      const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://petcare-server.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('saveuser', data);
          });
      };
    // const onSubmit = data => {console.log(data)
    //  createUser(data.email,data.password)
    //  .then(result=>{
    //     const loggedUser= result.user;
    //     console.log(loggedUser);
    //     navigate('/')
    //  })
    //  .catch(error=>{
    //     console.log(error)
    //     setSignUpError(error.message)
    //  })
    
    // }
    
   
    return (
        <>
             <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse bg-amber-200">

                    <div className="card md:w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(handleSignup)}>
                            <div className="form-control " >
                                <label className="label" htmlFor="name">
                                    <span className="label-text">Name</span>
                                </label>
                                <input id='form-borders' {...register('name')} type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
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
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Profile Picture</span></label>
                                <input type="file" {...register("profilePicture")} accept="image/*" className="input input-bordered w-full max-w-xs" />
                                {errors.profilePicture && <p className='text-rose-600'>{errors.profilePicture?.message}</p>}
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Signup" />
                            </div>
                            <div>
                                {signUpError && <p className='text-red-600'>{signUpError}</p>}
                            </div>
                        </form>
                        <p className='text-center'>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                    <div className="text-center lg:text-left md:w-1/2">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <p className="py-6">Here is the sign in page. In this page you can sign in to our website. you just enter your name,email,password and a cover picture</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;