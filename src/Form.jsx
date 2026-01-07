function Form() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    //==================== send data from client to server===============
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("user added successfully");
          form.reset();
        }
      });
  };
  return (
    <>
      <h1>Mongodb Client</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="name" /> <br /> <br />
        <input type="email" name="email" placeholder="email" /> <br /> <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default Form;
