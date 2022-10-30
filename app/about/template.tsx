import { ReactNode } from 'react';
import '../../styles/globals.css';

type Prop = {
  children: ReactNode;
};

const AboutTemplate = ({ children }: Prop) => {
  return (
    <div className='m-4 rounded border-4 border-red-400'>
      <div className='bg-red-400 py-2 text-white'>About Template</div>
      <>{children}</>
    </div>
  );
};

export default AboutTemplate;
