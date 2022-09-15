import type { NextPage } from "next";
import { useState } from "react";
import Title from "../../components/Title";

const Create: NextPage = () => {
  const [user, setUser] = useState<any>({
    // Added to not get "Warning: A component is changing an uncontrolled input to be controlled."
    name: "",
    username: "",
    email: "",
  });
  const [created, setCreated] = useState(false);
  const [missingInput, setMissingInput] = useState(false);

  const handleValueChanges = (e: any) => {
    setCreated(false);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitUser = async () => {
    if (user?.name === "" || user?.username === "" || user?.email === "") {
      setMissingInput(true);
      return;
    }
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setCreated(!created);
    setMissingInput(false);
  };

  return (
    <>
      <section>
        <Title title="Create" />
        <form action="" method="post">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={user?.name}
            onChange={handleValueChanges}
          ></input>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={user?.username}
            onChange={handleValueChanges}
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={user?.email}
            onChange={handleValueChanges}
          ></input>
          <button type="button" onClick={submitUser}>
            Create
          </button>
          <p style={created ? { color: "green" } : { color: "red" }}>
            {created
              ? "Created user " + user?.name
              : missingInput
              ? "Missing input."
              : null}
          </p>
        </form>
      </section>
    </>
  );
};

export default Create;
