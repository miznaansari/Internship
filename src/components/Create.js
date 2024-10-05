import React, { useContext, useState } from 'react'
import UserContext from './context/UserContext';

const Create = () => {
    const { addUser } = useContext(UserContext); // Get addUser from context
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState({
        street: '',
        suite: '',
        city: '',
        zipcode: '',
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        addUser(name,username,email,address);
       
    };

  return (
    <>
         <div>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="row d-flex flex-wrap">
                        <div className="mb-3 col-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className="mb-3 col-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-control"
                                id="username"
                            />
                        </div>
                        <div className="mb-3 col-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                            />
                        </div>
                        <div className="mb-3 col-3">
                            <label htmlFor="address-street" className="form-label">Address Street</label>
                            <input
                                type="text"
                                className="form-control"
                                value={address.street}
                                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                                id="address-street"
                            />
                        </div>
                        <div className="mb-3 col-3">
                            <label htmlFor="address-suite" className="form-label">Address Suite</label>
                            <input
                                type="text"
                                className="form-control"
                                value={address.suite}
                                onChange={(e) => setAddress({ ...address, suite: e.target.value })}
                                id="address-suite"
                            />
                        </div>
                        <div className="mb-3 col-3">
                            <label htmlFor="address-city" className="form-label">Address City</label>
                            <input
                                type="text"
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                className="form-control"
                                value={address.city}
                                id="address-city"
                            />
                        </div>
                        <div className="mb-3 col-3">
                            <label htmlFor="address-zipcode" className="form-label">Address Zipcode</label>
                            <input
                                type="text"
                                className="form-control"
                                value={address.zipcode}
                                onChange={(e) => setAddress({ ...address, zipcode: e.target.value })}
                                id="address-zipcode"
                            />
                        </div>
                        <div className="mb-3 col-3">
                            <button type="submit" className="btn btn-primary" >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Create
