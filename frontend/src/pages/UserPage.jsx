import React, { useState, useEffect } from 'react';
import DragAndDropTable from '../components/DragAndDropTable';
import apiClient from '../services/api'; // Updated import

const UserPage = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [inactiveUsers, setInactiveUsers] = useState([]);

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await apiClient.get('/users'); // Use the apiClient
        const active = data.filter(user => user.active);
        const inactive = data.filter(user => !user.active);
        setActiveUsers(active);
        setInactiveUsers(inactive);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  // Handle drag-and-drop to update user status
  const handleDrag = async (userId, isActive) => {
    try {
      await apiClient.patch(`/users/${userId}`, { active: isActive }); // Update user status
      // Refetch users to get the updated list
      const { data } = await apiClient.get('/users');
      const active = data.filter(user => user.active);
      const inactive = data.filter(user => !user.active);
      setActiveUsers(active);
      setInactiveUsers(inactive);
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  return (
    <div className="user-page">
      <h1>User Management</h1>
      <DragAndDropTable
        activeUsers={activeUsers}
        inactiveUsers={inactiveUsers}
        onDrag={handleDrag}
      />
    </div>
  );
};

export default UserPage;
