import { Todo } from './types'
import { BaseContext } from 'next/dist/shared/lib/utils';

interface Props{
  todo: Todo;
}

export default function Id({ todo }: Props) {
  console.log('todo--->', todo)
  return (
  <>
      <h1>User id {todo.id}</h1>
      <p><span>userId: </span>{todo?.userId}</p>
      <p><span>title: </span>{todo?.title}</p>
      <p><span>completed: </span>{`${todo?.completed}`}</p>
  </>
  )
}

//так как у нас статик Todos нам нужна еще одна функция для генерации всех путей
// Generates `/todos/1` and `/todos/2`
export async function getStaticPaths() {
  const dataFetch = async () => {
      const data = await (
        await fetch(
          `https://jsonplaceholder.typicode.com/todos`
        )
      ).json();
    return data;
  };
  const todos: Todo[] = await dataFetch();

  return {
    paths: todos.map((todo) => ({params: {id: todo.id.toString()}})),
    // paths: [{ params: { id: '1' } }, { params: { id: '2' } }],  //массив путей (из документации)
    fallback: false, // can also be true or 'blocking'
  }
}

//снова используем getStaticProps, при рендеринге полученный пропсы передаются в функцию Id()
export async function getStaticProps(context: BaseContext) { // maybe GetStaticPropsContext
  console.log('context--->', context)
  const { id } = context.params;    //const id = context.params?id as string
  console.log('id--->', id)
  const dataFetch = async () => {
      const data = await (
        await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        )
      ).json();

    return data;
    };
    const todo = await dataFetch();
  return {
    props: {todo},
  }
}
