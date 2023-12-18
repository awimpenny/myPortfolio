/** @format */

import Image from 'next/image';

export default function Home() {
    return (
        <main className='flex flex-col mx-auto max-w-6xl justify-center px-4 relative'>
            <div className='absolute top-0 left-0 right-0 z-0'>
                <div className='absolute overflow-visible opacity-50 dark:opacity-30 left-6 top-14'>
                    <div className='mix-blend-multiply absolute w-[600px] h-[600px] rounded-[40rem] circle-obj'></div>
                </div>
                <div className='absolute overflow-visible opacity-50 dark:opacity-30 left-52 top-12'>
                    <div className='mix-blend-multiply absolute w-[600px] h-[600px] rounded-[40rem] circle-obj2'></div>
                </div>
            </div>
            <div className='grid grid-cols-1 items-center mt-12 text-center md:mt-24 md:text-left md:grid-cols-6 z-10'>
                <h1 className='mb-5 col-span-5 order-2 text-4xl leading-tight tracking-wider md:leading-normal sm:text-5xl font-bold md:order-1'>
                    I&apos;m <span className='text-blue-500'>Adam</span>. A full stack developer, sharing my journey in
                    pursuit of excellence.
                </h1>
                <div className='order-1 md:order-2'>
                    <span className='inline-block overflow-hidden w-[160px] h-[160px] bg-none relative'>
                        <Image
                            src={'/small_pfp.png'}
                            alt={'Small Profile Picture'}
                            fill
                            className='col-span-1 rounded-full absolute'
                        />
                    </span>
                </div>
            </div>
            <div className='space-y-6 md:space-y-0 md:space-x-4 z-10'>
                <a href='/projects'>
                    <button
                        aria-label='button'
                        type='button'
                        className='md:w-auto md:inline-flex py-3 px-2 md:px-12 rounded-md w-full bg-white text-black dark:bg-[#2f2b2b] dark:text-white items-center justify-center general-ring-state font-medium'
                    >
                        View My Work
                    </button>
                </a>
                <a href='/about'>
                    <button
                        aria-label='button'
                        type='button'
                        className='md:w-auto md:inline-flex py-3 px-2 md:px-12 rounded-md w-full bg-[#2f2b2b] dark:bg-white text-white dark:text-black items-center justify-center general-ring-state font-medium'
                    >
                        More about me
                    </button>
                </a>
            </div>
            <hr className="h-10 w-full text-center my-16 border-none before:text-2xl before:leading-8 before:text-black  dark:before:text-gray-300 before:content-['~_~_~']"></hr>
        </main>
    );
}
