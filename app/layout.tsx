import Link from 'next/link';
import { FC, ReactNode } from 'react';
import '../styles/globals.css';

type Prop = {
  children: ReactNode;
};

const Layout: FC<Prop> = ({ children }) => {
  return (
    <>
      <header className='bg-gray-600 text-white text-center'>
        <h1>I am header.</h1>
        <nav className='space-x-2'>
          <Link href='/' className='underline'>
            Home
          </Link>
          <Link href='/about' className='underline'>
            About
          </Link>
          <Link href='/news' className='underline'>
            News
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className='bg-gray-600 text-white text-center'>
        I am footer
      </footer>
    </>
  );
};

export default Layout;
