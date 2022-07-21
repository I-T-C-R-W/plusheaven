import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
      <div className={styles.nav}>
        <div className={styles.nav_links}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/cards">
                <a>Cards</a>
            </Link>
            </li>
            <li>
              <Link href="/numbers">
                <a>Numbers</a>
            </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Welcome to Plusheaven</h1>
      </div>
    </div>   
      

      
    </div>
  )
}
