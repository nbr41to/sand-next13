import { NextPage } from 'next';
import Link from 'next/link';

const Legacy: NextPage = () => {
  return (
    <div>
      <h1>Legacy Page</h1>
      <Link href='/'>
        <a>昔むかし</a>
      </Link>
      <Link href='/'>
        <a>昔むかし</a>
      </Link>
      <Link href='/'>
        <a>昔むかし</a>
      </Link>
      <Link href='/'>
        <a>昔むかし</a>
      </Link>
    </div>
  );
};

export default Legacy;
