import { ReactNode } from 'react';

type Prop = {
  children: ReactNode;
};

const AboutLayout = ({ children }: Prop) => {
  return (
    <>
      <div className='bg-red-400 text-center text-white'>About</div>
      <div className='p-6'>{children}</div>
    </>
  );
};

export default AboutLayout;
