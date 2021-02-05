import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import App from './App';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code Editor - Xpro</title>
        <link rel="icon" href="/fav.ico" />
      </Head>

      <main className={styles.main}>
        <App />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
