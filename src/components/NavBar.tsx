import Link from 'next/link'

const ulStyle = {
  "display": "flex",
  "padding": "20px",
  "gap": "30px",
  "listStyle": "none"
}

export default function NavBar() {
  return <>
    <ul className="navbar" style={ulStyle}>
      <li><Link href={'/users'}>USERS</Link></li>
      <li><Link href={'/posts'}>POSTS</Link></li>
      <li><Link href={'/todos'}>TODOS</Link></li>
    </ul>
  </>
}
