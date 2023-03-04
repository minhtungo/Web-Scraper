import { Inter } from 'next/font/google';
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <DocumentMagnifyingGlassIcon className='h-64 w-64 text-blue-600/20' />
      <h1 className='text-3xl text-center mt-2 text-black font-bold mb-5'>
        Welcome to the Amazon Web Scraper
      </h1>
    </main>
  );
}
