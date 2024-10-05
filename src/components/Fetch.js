import React, { useContext, useState } from 'react';
import UserContext from './context/UserContext';
import Username from './Username';
const Fetch = () => {
    const { addUser, updateuser } = useContext(UserContext); // Get addUser from context
    const [update, setUpdate] = useState({
        id: '',
        uname: '',
        uusername: '',
        uemail: '',
        uaddress: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
        },
    });
    const { users, userdelete } = useContext(UserContext); // users is an array
    // console.log(users);

    // const [update, setupdate] = useState([])

    const handleupdate = (singleitem) => {
        setUpdate({
            id: singleitem.id, name: singleitem.name, email: singleitem.email, username: singleitem.username, address: {
                street: singleitem.address.street || '',
                suite: singleitem.address.suite || '',
                city: singleitem.address.city || '',
                zipcode: singleitem.address.zipcode || ''
            }
        })
    }
    const handleUpdateOk = (e) => {
        e.preventDefault();
        updateuser(update.id, update);
        console.log(update.id)
    }

    const handledelete = (id) => {
        userdelete(id);
    }

    return (
        <>
            {/* Modal */}
            {/* <!-- Button trigger modal --> */}


            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleUpdateOk}>
                                <div className="row d-flex flex-wrap align-items-center
">
                                    <div className="mb-3 col-4">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            onChange={(e) => setUpdate({ ...update, name: e.target.value })}
                                            value={update.name}
                                        />
                                    </div>
                                    <div className="mb-3 col-4">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input
                                            type="text"
                                            value={update.username}
                                            onChange={(e) => setUpdate({ ...update, username: e.target.value })}
                                            className="form-control"
                                            id="username"
                                        />
                                    </div>
                                    <div className="mb-3 col-4">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={update.email}
                                            onChange={(e) => setUpdate({ ...update, email: e.target.value })}

                                            id="email"
                                        />
                                    </div>
                                    <div className="mb-3 col-4">
                                        <label htmlFor="address-street" className="form-label">Address Street</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={update && update.address ? update.address.street || '' : ''}
                                            onChange={(e) => setUpdate({
                                                ...update,
                                                address: {
                                                    ...update.address, // Spread the existing address properties
                                                    street: e.target.value // Update only the suite field
                                                }
                                            })}  id="address-street"
                                        />
                                    </div>
                                    <div className="mb-3 col-4">
                                        <label htmlFor="address-suite" className="form-label">Address Suite</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={update && update.address ? update.address.suite || '' : ''}
                                            onChange={(e) => setUpdate({
                                                ...update,
                                                address: {
                                                    ...update.address, // Spread the existing address properties
                                                    suite: e.target.value // Update only the suite field
                                                }
                                            })}
                                            id="address-suite"
                                        />
                                    </div>
                                    <div className="mb-3 col-4">
                                        <label htmlFor="address-city" className="form-label">Address City</label>
                                        <input
                                            type="text"
                                            onChange={(e) => setUpdate({
                                                ...update,
                                                address: {
                                                    ...update.address, // Spread the existing address properties
                                                    city: e.target.value // Update only the suite field
                                                }
                                            })}
                                            className="form-control"
                                            value={update && update.address ? update.address.city || '' : ''}
                                            id="address-city"
                                        />
                                    </div>
                                    <div className="mb-3 col-4">
                                        <label htmlFor="address-zipcode" className="form-label">Address Zipcode</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={update && update.address ? update.address.zipcode || '' : ''}
                                            onChange={(e) => setUpdate({
                                                ...update,
                                                address: {
                                                    ...update.address, // Spread the existing address properties
                                                    zipcode: e.target.value // Update only the suite field
                                                }
                                            })}
                                            id="address-zipcode"
                                        />
                                    </div>
                                    <div className="mb-3 col-4">
                                        <button type="submit" className="btn btn-primary" >Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>

                    </div>
                </div>
            </div>

            {/* normal form */}
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
                                <th scope="col">Delete</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item) => (
                                <Username key={item.id} item={item} handledelete={handledelete} handleupdate={handleupdate} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Fetch;
