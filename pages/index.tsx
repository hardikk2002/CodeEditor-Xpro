import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import App from './App';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code Editor - Xpro</title>
        <link rel="icon" href="/fav.ico" />
        <meta name="description" content="A Next-Generation Code Editor" />
        <meta name="keywords" content="Nextjs Typescript CodeEditor Socketio, SCSS" />
        <meta name="author" content="Hardik Kaushik" />
      </Head>

      <main className={styles.main}>
        <App />
      </main>
    </div>
  )
}
