import Head from 'next/head'
import { NextPageContext } from 'next';
import Link from 'next/link'
import { Props } from './types'

export default function Users({ users }:Props) {

  //в реакте мы бы делали так, но в нексте получаем данные через
  // getServerSideProps и эти пропсы передаются при рендере в наш компонент Users()

  // useEffect(() => {
  //   const dataFetch = async () => {
  //     const data = await (
  //       await fetch(
  //         "https://jsonplaceholder.typicode.com/users"
  //       )
  //     ).json();
  //     setData(data);
  //   };
  //   dataFetch();
  // }, []);

  return (
    <>
      <Head>
        <title> Title of Users Page</title>
        <meta name="description" content="page of users" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>------Users Page------</h1>
        <ul>
          {users.map(user =>(<li key={user.id}><Link href={`/users/${user.id}`}>{user.name}</Link></li>))}
        </ul>
      </main>
    </>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://jsonplaceholder.typicode.com/users"
        )
      ).json();

    return data;
    };
    const users = await dataFetch();
  return {
    props: {users}, // will be passed to the page component as props
  }
}

//в билд версии создает только js
