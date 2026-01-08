import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllUsers = () => {
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
    margin: "6px",
  };
  return (
    <div>
      {/* 1. Use 'users.length' instead of 'usersData.length' */}
      <h1>All users available : {users.length}</h1>
      <div>
        {/* 2. Map over 'users' instead of 'usersData' */}
        {users.map((item) => (
          <p key={item._id}>
            {item.name} : {item.email} : {item._id}
            <Link to={`/updateUsers/${item._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(item._id)} style={btnStyle}>
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
