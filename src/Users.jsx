import { useLoaderData } from "react-router-dom";

const Users = () => {
  const usersData = useLoaderData();
  return (
    <div>
      <h1>user available : {usersData.length}</h1>
      <div className="">
        {usersData.map((item) => (
          <p key={item._id}>
            {item.name} : {item.email} : {item._id}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
