type UserDetailsProps = {
  user: any;
};

export default function UserDetails(props: UserDetailsProps) {
  const { user } = props;

  return (
    <>
      <h3>
        {user.name}
        <span>{user.id}</span>
      </h3>
      <p>Username: {user?.username}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      {JSON.stringify(user.address)}
    </>
  );
}
