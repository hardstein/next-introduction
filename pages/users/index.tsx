import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Title from "../../components/Title";
import UserCard from "../../components/UserCard";

const Users: NextPage = () => {
// const Users = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();
    setUsers(data.users); // need .users when fetching from localhost.
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const generate = users.map((user, i) => <UserCard key={i} user={user} />);
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
