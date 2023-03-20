import Head from 'next/head'
import { NextPageContext } from 'next';
import Link from 'next/link'
import {Todo} from './types'

interface Props {
  todos: Array<Todo>,
}
export default function Users({ todos }:Props) {

  return (
    <>
      <Head>
        <title> Title of Todos Page</title>
        <meta name="description" content="page of todos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>------Todos Page------</h1>
        <ul>
          {todos.map(todo => (<li key={todo.id}><Link href={`/todos/${todo.id}`}>{todo.title}</Link></li>))}
        </ul>
      </main>
    </>
  )
}
//этот метод отличается он генерирует сразу html страничку на сервере и ее возвращает (сравни с posts)
export async function getStaticProps(context: NextPageContext) {
  const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        )
      ).json();

    return data;
    };
    const todos = await dataFetch();
  return {
    props: {todos},
  }
}

//в билд версии создает статический html js
