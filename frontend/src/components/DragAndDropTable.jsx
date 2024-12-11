import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

const ITEM_TYPE = "USER";

function DraggableRow({ user, index, moveUser }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: ITEM_TYPE,
    item: { user, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <tr
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isDragging ? "#f0f0f0" : "white",
      }}
    >
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  );
}

function DroppableTable({ users, setUsers, tableType, moveUser }) {
  const [, dropRef] = useDrop({
    accept: ITEM_TYPE,
    drop: ({ user }) => moveUser(user, tableType),
  });

  return (
    <table ref={dropRef} style={{ border: "1px solid black", width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <DraggableRow key={uuidv4()} user={user} index={index} moveUser={moveUser} />
        ))}
      </tbody>
    </table>
  );
}

function DragAndDropTable({ activeUsers, inactiveUsers, setActiveUsers, setInactiveUsers }) {
  const moveUser = (user, targetTable) => {
    if (targetTable === "active") {
      setInactiveUsers((prev) => prev.filter((u) => u.id !== user.id));
      setActiveUsers((prev) => [...prev, user]);
    } else {
      setActiveUsers((prev) => prev.filter((u) => u.id !== user.id));
      setInactiveUsers((prev) => [...prev, user]);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h3>Active Users</h3>
        <DroppableTable users={activeUsers} setUsers={setActiveUsers} tableType="inactive" moveUser={moveUser} />
      </div>

      <div>
        <h3>Inactive Users</h3>
        <DroppableTable users={inactiveUsers} setUsers={setInactiveUsers} tableType="active" moveUser={moveUser} />
      </div>
    </div>
  );
}

export default DragAndDropTable;
