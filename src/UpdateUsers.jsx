import { useLoaderData } from "react-router-dom";

const UpdateUsers = () => {
  const userData = useLoaderData();
  console.log(userData);
  console.log(userData.name);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const user = { name, email };
    console.log(user);

    fetch(`http://localhost:5000/users/${userData?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>Update user data of : {userData.name}</h1>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={userData?.name} /> <br />
        <br />
        <input type="email" name="email" defaultValue={userData?.email} />
        <br /> <br />
        <input type="submit" value="update" /> <br /> <br />
      </form>
    </div>
  );
};

export default UpdateUsers;
