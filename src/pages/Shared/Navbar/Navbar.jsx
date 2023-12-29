import { Link } from 'react-router-dom';
import './Navbar.css';

import useAuth from '../../../Hook/useAuth';

const Navbar = () => {
    const { user, logOut } =useAuth();
    console.log('my namee',user?.photoURL)
    
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className='nav'>
            <div className="navbar bg-amber-300 h-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                         
                           
                            <li><Link to='/blog'>Blog</Link></li>
                            {/* <li tabIndex={1}>
                                    <a>
                                        Blogs
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul className="p-2 bg-base-100">
                                        <li><Link to='/blog'>Blog</Link></li>
                                        <li><Link to='/news'>News</Link></li>


                                    </ul>
                                </li> */}
                            <li><Link to='/contactus'>Contact Us</Link></li>

                            {
                                    user?.uid ? (
                                        <div className="dropdown dropdown-end  mt-4">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img src={user.photoURL} alt='ddd' />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><Link to='/profile'>Profile</Link></li>


                                                <li onClick={handleLogout}><a>Logout</a></li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <li><Link to='/login'>Login</Link></li>
                                    )
                                }


                        </ul>
                    </div>
                    <img src='https://i.ibb.co/QFJqtGB/petcarelogo.png' alt='' className='logo' />
                </div>
                <div className="navbar-center hidden lg:flex " >
                    <ul className="menu menu-horizontal  " id='navlist'>
                        <li><Link to='/home'>Home</Link></li>
                        
                        <li><Link to='/blog'>Blog</Link></li>
                        {/* <div className="">
                            <li tabIndex={1} className="  dropdown dropdown-bottom fih z-10 ">
                                <Link>
                                    Blogs
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul tabIndex={1} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/news'>News</Link></li>

                                </ul>
                            </li>
                        </div> */}

                        <li><Link to='/contactus'>Contact Us</Link></li>
                        {
                                    user?.uid ? (
                                        <div className="dropdown dropdown-end  ">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full ">
                                                    <img src={user.photoURL} alt='ddd' />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><Link to='/profile'>Profile</Link></li>


                                                <li onClick={handleLogout}><a>Logout</a></li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <li><Link to='/login'>Login</Link></li>
                                    )
                                }


                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Navbar;