import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Title from "../../components/Title";
import UserDetails from "../../components/UserDetails";

const User: NextPage = () => {
    
  const router = useRouter();
  const userId = router.query.userid; // Dynamic [userid] file
//   if (userId === null || userId === undefined) return null;
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();
    setUser(data.users[Number(userId) - 1]); // need .users when fetching from localhost.
    console.log(data.users[Number(userId) - 1]);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Title title={"User " + userId} />
      <UserDetails user={user}/>
    </>
  );
};

export default User;
