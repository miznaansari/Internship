import React, { useEffect, useState } from 'react'
import UserContext from './UserContext';

const UserState = (props) => {
    const [users, setusers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((json) => {
            setusers(json)
        } )
    }, []);

    const updateuser= async (id, update)=>{
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(update)
            });
            const updatedUsers = users.map(user => 
                user.id === id ? update : user
            );
            console.log(updatedUsers)
            setusers(updatedUsers); 
            if (response.ok) {
                console.log('User updated successfully');
                const users = users.map(user => 
                    user.id === id ? 'match ho gaya' : 'match nahi hua'
                );
                console.log('User updated successfullzdgsdy');
                console.log(users + update);
    
                // Update the state with the new user list
                setusers(users); // Assuming `setUsers` is your state updater for users
            } 

        } catch (error) {
            
        }
    }

    const userdelete = async (id) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                console.log('User deleted successfully');
                // Optionally, update the state to remove the user from the UI
                setusers(prevUsers => prevUsers.filter(user => user.id !== id));
            } else {
                console.log('Error deleting user');
            }
        } catch (error) {
            console.log('Error:', error.message);
        }
    };

    const addUser = async(name,email,username,address)=>{
        const userData = {
            name,
            username,
            email,
            address,
        };
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log('Data Inserted'+ jsonResponse.name);
                setusers(prevUsers => [...prevUsers, jsonResponse]);
            } else {
                console.log('error');
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <UserContext.Provider value={{ users,addUser,userdelete ,updateuser}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState
