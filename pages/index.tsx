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
        <meta name="keywords" content="Nextjs Typescript CodeEditor Socketio SCSS" />
        <meta name="author" content="Hardik Kaushik" />
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BW6QTRRX73"></script>
        <script>
         window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-BW6QTRRX73');
        </script>
      </Head>

      <main className={styles.main}>
        <App />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
