'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import penguin_image from '../public/space_uchu_penguin.png';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className='text-2xl'>Home Page</h1>
      <p>publicからimport</p>
      <Image
        src='/space_uchu_penguin.png'
        alt='penguin1'
        blurDataURL='https://picsum.photos/300'
        width={300}
        height={300}
      />
      <p>publicからimport</p>
      <Image
        src={penguin_image}
        alt='penguin2'
        placeholder='blur'
        blurDataURL='https://picsum.photos/1000'
      />
      <Image
        src='https://picsum.photos/1000'
        alt='penguin3'
        placeholder='blur'
        blurDataURL='https://picsum.photos/1000'
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Home;
