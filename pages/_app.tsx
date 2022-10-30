import { AppProps } from 'next/app';
import { FC, ReactNode } from 'react';
import '../styles/globals.css';

type Prop = {
  children: ReactNode;
};

const Layout: FC<Prop> = ({ children }) => {
  return (
    <>
      <header className='bg-gray-600 text-white text-center'>
        <h1>I am legacy header.</h1>
      </header>

      <main>{children}</main>

      <footer className='bg-gray-600 text-white text-center'>
        I am legacy footer
      </footer>
    </>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
