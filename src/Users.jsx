import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const usersData = useLoaderData();
  const [users, setUsers] = useState(usersData);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("user deleted successfully");
          const remainingUsers = users.filter((element) => element._id !== id);
          setUsers(remainingUsers);
        }
      });
  };
  const btnStyle = {
    backgroundColor: "red",
    padding: "3px",
    margin: "6px",
  };
  return (
    <div>
      {/* 1. Use 'users.length' instead of 'usersData.length' */}
      <h1>user available : {users.length}</h1>
      <div>
        {/* 2. Map over 'users' instead of 'usersData' */}
        {users.map((item) => (
          <p key={item._id}>
            {item.name} : {item.email} : {item._id}
            <button onClick={() => handleDelete(item._id)} style={btnStyle}>
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
