import React from 'react';
import { FaUserShield, FaTrash } from 'react-icons/fa';

import './Allusers.css';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
const Allusers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        },
    });
    const handleDelete = () => {

    }
    const handleMakeAdmin = (user, event) => {
        event.preventDefault()
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    console.log('yess')
                }
            })
    }
    return (
        <div>
            <div className='w-full'>

                <h3>Total Users</h3>
                <h1>{users.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {

                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className='btn btn-ghost bg-red-600 text-black'><FaUserShield></FaUserShield></button>}</td>


                                        <td><button onClick={() => handleDelete(user)}
                                            className='btn btn-ghost bg-red-600 text-black
             '><FaTrash /></button></td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Allusers;