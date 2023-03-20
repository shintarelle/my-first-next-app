import Head from 'next/head'
import { NextPageContext } from 'next';
import Link from 'next/link'
import { Props } from './types'

export default function Posts({ posts }:Props) {

  return (
    <>
      <Head>
        <title> Title of Posts Page</title>
        <meta name="description" content="page of posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>------Posts Page------</h1>
        <ul>
          {posts.map(post => (<li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>))}
        </ul>
      </main>
    </>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        )
      ).json();

    return data;
    };
    const posts = await dataFetch();
  return {
    props: {posts},
  }
}

//в билд версии создает только js
