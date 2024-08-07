import React, { useState, useEffect } from 'react';
import '../../Assets/Css/User.css';
import Sidebar from '../../Components/Ui/Sidebar';

const User = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedPassword, setEditedPassword] = useState('');
  
  const [searchField, setSearchField] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Fetch users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
    setFilteredUsers(storedUsers);
  }, []);

  useEffect(() => {
    // Filter users based on search query and field
    const filtered = users.filter(user => {
      const fieldValue = searchField === 'name'
        ? `${user.firstName} ${user.lastName}`
        : user[searchField];
      return fieldValue.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredUsers(filtered);
  }, [searchField, searchQuery, users]);

  const handleEdit = (user) => {
    setEditUser(user.email);
    setEditedFirstName(user.firstName);
    setEditedLastName(user.lastName);
    setEditedEmail(user.email);
    setEditedPassword(user.password);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = users.map(user => 
      user.email === editedEmail 
        ? { ...user, firstName: editedFirstName, lastName: editedLastName, password: editedPassword }
        : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setEditUser(null);
  };

  const handleDelete = (email) => {
    const updatedUsers = users.filter(user => user.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleSearchFieldChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="users-container">
      <Sidebar/>
      <h1 className="users-title">Manage Users</h1>
      <div className="search-bar">
        
        <input
          type="text"
          placeholder={`Search by ${searchField}`}
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>
      {editUser ? (
        <div className="edit-form-container">
          <h2>Edit User</h2>
          <form onSubmit={handleEditSubmit}>
            <label htmlFor="editFirstName">First Name</label>
            <input
              type="text"
              id="editFirstName"
              value={editedFirstName}
              onChange={(e) => setEditedFirstName(e.target.value)}
              required
            />

            <label htmlFor="editLastName">Last Name</label>
            <input
              type="text"
              id="editLastName"
              value={editedLastName}
              onChange={(e) => setEditedLastName(e.target.value)}
              required
            />

            <label htmlFor="editEmail">Email</label>
            <input
              type="email"
              id="editEmail"
              value={editedEmail}
              readOnly
            />

            <label htmlFor="editPassword">Password</label>
            <input
              type="password"
              id="editPassword"
              value={editedPassword}
              onChange={(e) => setEditedPassword(e.target.value)}
              required
            />

            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setEditUser(null)}>Cancel</button>
          </form>
        </div>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th className="users-table-header">Name</th>
              <th className="users-table-header">Email</th>
              <th className="users-table-header">Password</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="4" className="users-table-cell">No users found</td>
              </tr>
            ) : (
              filteredUsers.map(user => (
                <tr key={user.email} className="users-table-row">
                  <td className="users-table-cell">{user.firstName} {user.lastName}</td>
                  <td className="users-table-cell">{user.email}</td>
                  <td className="users-table-cell">{user.password}</td>
                  
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
