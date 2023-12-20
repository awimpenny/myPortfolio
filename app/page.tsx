/** @format */

import Image from 'next/image';
import ContactForm from '@/components/about/contact';

export default function Home() {
    return (
        <main>
            <div className='absolute top-0 left-0 right-0 -z-10'>
                <div className='absolute overflow-visible opacity-50 dark:opacity-30 left-6 top-14'>
                    <div className='mix-blend-multiply absolute w-[600px] h-[600px] rounded-[40rem] circle-obj'></div>
                </div>
                <div className='absolute overflow-visible opacity-50 dark:opacity-30 left-52 top-12'>
                    <div className='mix-blend-multiply absolute w-[600px] h-[600px] rounded-[40rem] circle-obj2'></div>
                </div>
            </div>
            <div className='grid grid-cols-1 items-center mt-12 text-center md:mt-24 md:text-left md:grid-cols-6'>
                <h1 className='mb-8 col-span-5 order-2 text-3xl leading-tight tracking-wider md:leading-normal sm:text-5xl font-bold md:order-1'>
                    I&apos;m <span className='text-blue-500'>Adam</span>. A full stack developer sharing my journey in
                    pursuit of excellence.
                </h1>
                <div className='mb-4 md:mb-0 order-1 md:order-2'>
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
            <div className='flex flex-col space-y-6 md:space-y-0 md:space-x-4 md:flex-row'>
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
            <div>
                <h2 className='text-4xl font-bold tracking-wide mb-5 md:mb-6 text-center md:text-left'>
                    A selection of my favorite projects.
                </h2>
                <p className='text-lg mb-3 md:mb-5 text-center md:text-left'>Check out some of my favourite pieces.</p>
                <ProjectsList />
            </div>
            <hr className="h-10 w-full text-center my-16 border-none before:text-2xl before:leading-8 before:text-black  dark:before:text-gray-300 before:content-['~_~_~']"></hr>
            <ContactForm />
        </main>
    );
}

interface Iprojects {
    img: string;
    title: string;
    desc: string;
    link: string;
}

const ProjectsList = () => {
    const projects: Iprojects[] = [
        {
            img: '/crystaldetails.jpg',
            title: 'Crystal Details',
            desc: 'A car valeting template website I made for fun.',
            link: 'https://www.crystaldetails.co.uk/',
        },
        {
            img: '/evol-ve.jpg',
            title: 'Evol-ve',
            desc: 'A clinic that does tattoos, pmu and much more..',
            link: 'https://evol-ve.com/',
        },
    ];

    return (
        <div className='gap-5 grid grid-cols-1 md:grid-cols-2 w-full mb-16'>
            {projects.map((v: Iprojects, i: number) => {
                return (
                    <div className='flex flex-col bg-gray-200 dark:bg-[#2f2b2b] p-4 rounded-lg w-full' key={i}>
                        <a href={v.link} target='_blank'>
                            <Image
                                src={v.img}
                                alt='Project Screenshot'
                                width={1920}
                                height={1080}
                                className='object-fill rounded-lg'
                            />
                        </a>

                        <h2 className='text-lg mt-4 mb-2'>{v.title}</h2>
                        <h3 className='text-sm mb-4'>{v.desc}</h3>
                        <hr />
                        <a href={v.link} target='_blank'>
                            <button
                                aria-label='button'
                                type='button'
                                className='mt-4 text-sm md:w-auto md:inline-flex py-2 px-1 md:px-12 rounded-md w-full bg-[#2f2b2b] dark:bg-white text-white dark:text-black items-center justify-center general-ring-state font-medium'
                            >
                                Visit {v.title}
                            </button>
                        </a>
                    </div>
                );
            })}
        </div>
    );
};
