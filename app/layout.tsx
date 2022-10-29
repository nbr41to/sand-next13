import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <html>
      <header>Home Layout</header>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/news'>News</Link>
        <Link href='/news/123'>News/123</Link>
      </nav>
      <body>{children}</body>
    </html>
  );
}
