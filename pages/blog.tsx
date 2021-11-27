import { Layout } from "../components/Layout";
import styles from "../styles/Blog.module.css";

interface post {
  id: number;
  title: string;
  body: string;
}

interface props {
  data: post[];
}

const Blog = ({ data }: props) => {
  return (
    <Layout pageTitle="Blog">
      {data.map((blog: any, key: any) => (
        <div className={styles.card} key={key}>
          <h4>{blog.title}</h4>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  );
};

export default Blog;

// Will generating data on server for better SEO
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
