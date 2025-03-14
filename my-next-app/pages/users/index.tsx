import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: { users },
  };
}

interface User {
  id: number;
  name: string;
}

interface HomeProps {
  users: User[];
}

export default function Home({ users }: HomeProps) {
  return (
    <div>
      <h1>Daftar Pengguna</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}