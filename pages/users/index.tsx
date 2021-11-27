import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import styles from "../../styles/Users.module.css";

interface props {
  dataUsers: Array<any>;
}

const Users = ({ dataUsers }: props) => {
  const router = useRouter();
  return (
    <Layout pageTitle="Users">
      {dataUsers.map((user, key) => (
        <div
          className={styles.card}
          key={key}
          onClick={() => router.push(`/users/${user.id}`)}
        >
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
