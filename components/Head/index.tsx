import Head from "next/head";

type props = {
  title: String;
};

const Meta = ({ title }: props) => {
  return (
    <Head>
      <meta name="description" content="Next JS Basic App" />
      <title>Next JS basic | {title} pages</title>
    </Head>
  );
};

export default Meta;
