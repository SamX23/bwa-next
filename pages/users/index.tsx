import { Layout } from "../../components/Layout";

interface props {
  dataUsers: Array<any>;
}

const Users = ({ dataUsers }: props) => {
  return (
    <Layout pageTitle="Users">
      {dataUsers.map((user, key) => (
        <div key={key}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
};

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
