import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shangya Mao</title>
        <meta name="description" content="Shangya Mao Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Hello, I'm Jenny</h1>
          <h3>Welcome to my world!</h3>
          <Image
            src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1675183507/jenny_gggwbm.jpg"
            alt="Jenny avatar"
            width={400}
            height={400}
            className={styles.avatar}
          />
        </section>
      </main>
    </>
  );
}
