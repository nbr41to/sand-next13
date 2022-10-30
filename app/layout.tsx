import Link from 'next/link';
import { FC, ReactNode } from 'react';
import '../styles/globals.css';

type Prop = {
  children: ReactNode;
};

const Layout: FC<Prop> = ({ children }) => {
  return (
    <>
      <header className='rounded-b-[999px] bg-gray-600 py-2 text-center text-white'>
        <h1 className='text-2xl font-bold'>common header.</h1>
      </header>

      <nav className='my-2 space-x-2 py-2 text-center'>
        <span className='font-bold'>common menu: </span>
        <Link href='/' className='underline'>
          Home
        </Link>
        <Link href='/about' className='underline'>
          About
        </Link>
        <Link href='/news' className='underline'>
          News
        </Link>
        <span>|</span>
        <span>grouped pages: </span>
        <Link href='/blog' className='underline'>
          Blog
        </Link>
        <Link href='/profile' className='underline'>
          Profile
        </Link>
      </nav>

      <main>{children}</main>

      <footer className='bg-gray-600 text-center font-bold text-white'>
        common footer
      </footer>
    </>
  );
};

export default Layout;
