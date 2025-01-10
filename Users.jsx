// src/components/Users.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  
  // Fetch users from the backend API when the component is mounted
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users'); // API endpoint to fetch users
        setUsers(response.data); // Set users data in the state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    
    fetchUsers();
  }, []); // Empty dependency array to run the effect only once on component mount

  // Function to delete a user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`); // API endpoint to delete user
      setUsers(users.filter(user => user.id !== id)); // Remove user from state after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="users">
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th> {/* Add a column for actions (edit/delete) */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}> {/* Use _id from MongoDB as the unique key */}
              <td>{user._id}</td>
              <td>{user.username}</td> {/* Assuming user has a "username" field */}
              <td>{user.email}</td>
              <td>
                <button onClick={() => deleteUser(user._id)}>Delete</button> {/* Add delete button */}
                {/* You can add an "Edit" button here as well to handle updating users */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
