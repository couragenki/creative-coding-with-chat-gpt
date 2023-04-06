import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <h1>TOP</h1>
        <ul>
          <li>
            <Link href="/">TOP</Link>
          </li>
          <li>
            <Link href="/anime/1">アニメ1</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
