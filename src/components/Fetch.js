import React, { useContext } from 'react';
import userContext from './context/UserContext';
const Fetch = () => {
    const { users } = useContext(userContext); // users is an array
    console.log(users);
    console.log(users)
    return (
        <>
            <div className="container">
                {/* {users[0]} */}
            </div>
            <div className='container'>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">User ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item) => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}
                                    </td>
                                    <td> a<button className='btn btn-danger'>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Fetch;
