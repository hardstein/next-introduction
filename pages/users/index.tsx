import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Title from "../../components/Title";
import User from "../../components/User";

const Users: NextPage = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();
    setUsers(data.users); // need .users when fetching from localhost.
    console.log(data.users[0]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // const generate = users.map((user, i) => <p key={i}>{JSON.stringify(user)}</p>);
  const generate = users.map((user, i) => <User key={i} user={user} />);
  // const generate = users.[0]((user, i) => <User key={i} user={user} />);
  return (
    <>
      <section>
        <Title title="Users" />
        <ul className="users">{generate}</ul>
      </section>
    </>
  );
};

export default Users;
