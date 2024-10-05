import React from 'react'

const Username = (props) => {
    const { item, handleupdate, handledelete } = props;
    return (
        <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>
                {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}
            </td>
            <td><button onClick={() => {
                    if (window.confirm('Are you sure you want to delete this user?')) {
                        handledelete(item.id);
                    }
                }}
                className='btn btn-danger'
            >
                Delete
            </button></td>
            <td><button type="button" onClick={() => handleupdate(item)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Update
            </button></td>
        </tr>
    )
}

export default Username
