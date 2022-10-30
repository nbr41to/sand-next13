import { NextPage } from 'next';
import AboutComponent from './AboutContent';

export const About: NextPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <AboutComponent />
    </div>
  );
};
