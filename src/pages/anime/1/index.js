import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Space from '@/components/effect/space';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>anime 1</title>
      </Head>
      <main>
        <h1>anime 1</h1>

        <Space />
      </main>
    </>
  );
}