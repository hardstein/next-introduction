import type { NextPage } from "next";
import Title from "../components/Title";

const Home: NextPage = () => {
  return (
    <>
      <Title title="Welcome" />
      <p>Click on users in the navigation above to get a list of all the users.</p>
      <p>To add a new user click on "Create" in the navigation.</p>
    </>
  );
};

export default Home;
