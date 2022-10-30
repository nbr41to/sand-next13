import { ReactNode } from 'react';
import '../../styles/globals.css';

type Prop = {
  children: ReactNode;
};

const AboutLayout = ({ children }: Prop) => {
  return (
    <>
      <header className='bg-gray-600 text-white text-center'>
        <h1>I am header.</h1>
        <div className='bg-red-400 text-white'>About</div>
      </header>

      <main>{children}</main>

      <footer className='bg-gray-600 text-white text-center'>
        I am footer
      </footer>
    </>
  );
};

export default AboutLayout;
