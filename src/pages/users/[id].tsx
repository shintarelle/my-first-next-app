import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import  { Users } from './types'

//тут динамическая страница делает запрос в useEffect (рендер на стороне клиента)
export default function Id() {
  const { query: { id } } = useRouter()
  const [data, setData] = useState<Users>()

    useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        )
      ).json();

      setData(data);
    };

    dataFetch();
  }, [id]);

  console.log(id)
  return (
  <>
      <h1>User id {id}</h1>
      <p><span>name: </span>{data?.name}</p>
      <p><span>surname: </span>{data?.username}</p>
      <p><span>phone: </span>{data?.phone}</p>
      <p><span>email: </span>{data?.email}</p>
      <p><span>website: </span>{data?.website}</p>
  </>
  )
}
