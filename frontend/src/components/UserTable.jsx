import React from "react";

function UserTable({ users, title }) {
  return (
    <div>
      <h3>{title}</h3>
      <table style={{ width: "100%", border: "1px solid black", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
