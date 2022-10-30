import { FC, ReactNode } from 'react';

type Prop = {
  children: ReactNode;
};

const GroupLayout: FC<Prop> = ({ children }) => {
  return (
    <>
      <div className='bg-green-400 text-center text-white'>Grouped</div>
      <div className='p-6'>{children}</div>
    </>
  );
};

export default GroupLayout;
