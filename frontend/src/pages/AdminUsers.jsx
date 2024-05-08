import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../store/auth-context';

function AdminUsers() {
  const { users, token } = useContext(authContext);
  const [Users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    setUsers(users.length === 0 ? [] : users);
  }, [users]);

  const toggleEditMode = (userId) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [userId]: !prevEditMode[userId]
    }));
  };

  const handleInputChange = (userId, field, value) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === userId ? { ...user, [field]: value } : user
      )
    );
  };

  const handleUpdate =async (userId) => {
    console.log(`Update user with ID: ${userId}`, Users.find(user => user._id === userId));
    try{
      await fetch(`http://localhost:3000/api/admin/update/${userId}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
          "authorization":token
        },
        body:JSON.stringify(Users.find(user => user._id === userId))
      }).then(res=>res.json())
      .then(res=>{
        console.log("user updated successfully")
      })
    }catch(error){
      console.error(error.message)
    }
    toggleEditMode(userId); // Disable edit mode after update
  };

  return (
    <div className="overflow-x-auto w-screen p-5">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              is Admin?
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Users.map((item) => (
            <tr key={item._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {editMode[item._id] ? (
                  <input
                    type="text"
                    className="border border-gray-300 px-2 py-1 rounded-md"
                    value={item.name}
                    onChange={(e) =>
                      handleInputChange(item._id, 'name', e.target.value)
                    }
                  />
                ) : (
                  item.name
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {editMode[item._id] ? (
                  <input
                    type="email"
                    className="border border-gray-300 px-2 py-1 rounded-md"
                    value={item.email}
                    onChange={(e) =>
                      handleInputChange(item._id, 'email', e.target.value)
                    }
                  />
                ) : (
                  item.email
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {editMode[item._id] ? (
                  <input
                    type="tel"
                    className="border border-gray-300 px-2 py-1 rounded-md"
                    value={item.phone}
                    onChange={(e) =>
                      handleInputChange(item._id, 'phone', e.target.value)
                    }
                  />
                ) : (
                  item.phone
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {editMode[item._id] ? (
                  <input
                    type="checkbox"
                    checked={item.isAdmin}
                    onChange={(e) =>
                      handleInputChange(
                        item._id,
                        'isAdmin',
                        e.target.checked
                      )
                    }
                  />
                ) : (
                  `${item.isAdmin}`
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex gap-10">
                {editMode[item._id] ? (
                  <button
                    className="text-green-600 hover:text-green-900 mr-2"
                    onClick={() => handleUpdate(item._id)}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className="text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() => toggleEditMode(item._id)}
                  >
                    Update
                  </button>
                )}
                <button
                  className="text-red-600 hover:text-red-900"
                  onClick={() => {
                    try {
                      fetch(`http://localhost:3000/api/admin/delete/${item._id}`, {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json',
                          Authorization: `Bearer ${token}`
                        }
                      })
                        .then((res) => res.json())
                        .then((data) => {
                          setUsers(Users.filter((user) => user._id !== item._id));
                        });
                    } catch (error) {
                      console.error(error.message);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
