import Head from "next/head";
import styles from "../styles/Home.module.css";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Shangya Mao</title>
        <meta name="description" content="Shangya Mao Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>contact</div>
    </>
  );
};

export default Contact;
