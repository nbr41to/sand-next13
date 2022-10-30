import { ReactNode } from 'react';

type Prop = {
  children: ReactNode;
};

const NewsLayout = ({ children }: Prop) => {
  return (
    <>
      <div className='bg-blue-400 text-center text-white'>News</div>
      <div className='p-6'>{children}</div>
    </>
  );
};

export default NewsLayout;
