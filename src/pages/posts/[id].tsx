import { NextPageContext } from 'next';
import { Post } from './types'

interface Props {
  post: Post;
}

export default function Id({ post }: Props) {  //принимаем сюда пропсы с getServerSideProps
  console.log('post--->', post);
  return (
  <>
      <h1>User - id {post.id}</h1>
      <p><span>userId: </span>{post?.userId}</p>
      <p><span>title: </span>{post?.title}</p>
      <p><span>body: </span>{post?.body}</p>
  </>
  )
}

//снова используем сайт рендеринг getServerSideProps, при рендеринге полученный пропсы передаются в функцию Id()
export async function getServerSideProps(context: NextPageContext) {
  console.log('context--->', context) //смотри в терминале в редакторе
  const { id } = context.query;
  console.log('id--->', id)
  const dataFetch = async () => {
      const data = await (
        await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        )
      ).json();

    return data;
    };
    const post = await dataFetch();
  return {
    props: {post},
  }
}
