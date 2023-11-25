import React from 'react';
import { Link, Outlet } from 'react-router-dom';



const Profile = () => {
    const isAdmin= true

    return (
        <div className=''>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button sm:hidden md:hidden lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side bg-green-400 ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full  text-base-content">
                        {/* Common links for all users */}
                        <li><Link to='postblog'><img className='h-8 w-8 ' src="https://i.ibb.co/zGv0jNF/content-writing.png " alt="salary" />PostBlog</Link></li>
                        <li><Link to='updateprofile'><img className='h-8 w-8 ' src="https://i.ibb.co/mhq2T4p/update-user.png" alt="salary" />Update Profile</Link></li>

                        {/* Links visible only for admin */}
                        {isAdmin && (
                            <>
                                <li><Link to='adminhome'><img className='h-8 w-8 ' src="https://i.ibb.co/mtHSzh4/image.png" alt="salary" />Admin Home</Link></li>
                                <li><Link to='allusers'><img className='h-8 w-8 ' src="https://i.ibb.co/ssJnSx3/image-removebg-preview-1.png" alt="salary" />All Users</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
