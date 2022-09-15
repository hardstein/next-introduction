import Link from "next/link";

type UserProps = {
  user: any;
  // id: string;
  // name: string;
  // username: string;
  // email: string;
  // street: string;
  // city: string;
  // company: string;
};

export default function UserCard(porps: UserProps) {
  // const { id, name, username, email, street, city, company } = porps;
  const { user } = porps;

  function navigationPath() {
    return `users/${user.id}`;
  }
  return (
    <>
      <li className="user">
        <h3>
          {user?.name}
          <span>{user?.id}</span>
        </h3>
        <p>Username: {user?.username}</p>
        <p>Contact: {user?.email}</p>
        <div className="userCardLink">
          <Link href={navigationPath()}>
            <a>More information</a>
          </Link>
        </div>
      </li>
    </>
  );
}
