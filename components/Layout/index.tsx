import { ReactNode } from "react";
import Footer from "../Footer";
import Meta from "../Head";
import Header from "../Header";
import styles from "./Layout.module.css";

interface props {
  children: ReactNode;
  pageTitle: String;
}

export const Layout = ({ children, pageTitle }: props) => {
  return (
    <>
      <Meta title={pageTitle} />
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
};
