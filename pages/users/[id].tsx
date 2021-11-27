import { Layout } from "../../components/Layout";

interface userProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface props {
  user: userProps;
}

const UserDetail = ({ user }: props) => {
  return (
    <Layout pageTitle="User Detail">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  );
};

export default UserDetail;

// Will generating all user detail page html, faster for client to access it
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  const paths = dataUsers.map(({ user }: props) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface staticProps {
  params: { id: string };
}

// Will generating all user detail page html, faster for client to access it
export async function getStaticProps(context: staticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
