import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title> Title of Users/about Page</title>
        <meta name="description" content="page of users" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>------Users/About Page------</h1>
      </main>
    </>
  )
}

//в билд версии создает статический html
