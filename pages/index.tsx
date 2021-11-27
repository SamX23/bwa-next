import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home">
      <main>Sami Kalammallah</main>
      <Image
        src="/unsplash.jpg"
        alt="Image from unsplash"
        width={500}
        height={320}
      />
    </Layout>
  );
};

export default Home;
