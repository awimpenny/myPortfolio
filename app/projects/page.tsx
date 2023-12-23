/** @format */
import Image from 'next/image';
import ContactForm from '@/components/about/contact';
interface Iprojects {
    title: string;
    emoji: string;
    date: string;
    desc: string;
    img: string;
    tags: string[];
    link: string;
    flipped: boolean;
}

const Projects = () => {
    const projects: Iprojects[] = [
        {
            title: 'Crystal Details',
            emoji: '🧽',
            date: 'Dec.2023',
            desc: 'Worked with them to developer a responsive web application built from ground up using the NextJS framework, with high focus on design suitable for all platforms and Search Engine Optimization, to achieve the best online presence and highest rankings.',
            tags: ['JavaScript', 'Html', 'CSS', 'UI/UX'],
            link: 'https://www.crystaldetails.co.uk/',
            flipped: false,
            img: '/crystaldetails.jpg',
        },
        {
            title: 'Evol-ve',
            emoji: '💉',
            date: 'incomplete',
            desc: 'Worked with this client for an extensive time to truly achive what they were after. Once finished I made sure that the (SEO) was done correctly to achive the best online presence.',
            tags: ['JavaScript', 'Html', 'CSS', 'UI/UX'],
            link: 'https://evol-ve.com/',
            flipped: true,
            img: '/evol-ve.jpg',
        },

        {
            title: 'Adamtecture',
            emoji: '🏢',
            date: 'Dec.2023',
            desc: 'A project I made just for fun showing what I can design. This is just the home page as I wanted to show off my designing more than what I can code.',
            tags: ['JavaScript', 'Html', 'CSS', 'UI/UX'],
            link: 'https://adamtecture.vercel.app/',
            flipped: false,
            img: '/adamtecture.jpg',
        },
    ];

    return (
        <main>
            <h1 className='text-lg md:text-xl text-center text-blue-500 mt-10 mb-2 tracking-wide'>MY PROJECTS</h1>
            <h2 className='text-3xl md:text-4xl text-center tracking-wide font-bold mb-20'>
                Check out some of my work.
            </h2>
            <div className='flex flex-col w-full mb-10 gap-y-10 lg:gap-y-24'>
                {projects.map((v: Iprojects, i: number) => {
                    return (
                        <div
                            key={i}
                            className='grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-10 lg:gap-y-24 w-full h-full'
                        >
                            <ProjectCard data={v} />
                            <ProjectImg data={v} />
                        </div>
                    );
                })}
            </div>
            <hr className="h-10 w-full text-center my-16 border-none before:text-2xl before:leading-8 before:text-black  dark:before:text-gray-300 before:content-['~_~_~']"></hr>
            <ContactForm />
        </main>
    );
};

const ProjectImg = (props: { data: Iprojects }) => {
    return (
        <div className='md:col-span-2 m-auto'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-5'>
                <div className='relative col-span-5 overflow-hidden rounded-lg'>
                    <Image
                        src={props.data.img}
                        alt={props.data.title}
                        width={800}
                        height={800}
                        className={`${
                            props.data.flipped && 'lg:order-1'
                        } rounded-lg border-gray-600/20 dark:border-gray-200/20 border-4`}
                    />
                </div>
            </div>
        </div>
    );
};

const ProjectCard = (props: { data: Iprojects }) => {
    const tagStyle = 'inline-block bg-gray-200 dark:bg-[#2f2b2b] text-sm leading-5 mr-2 mb-2 px-4 py-2 rounded-full';

    return (
        <div className={`${props.data.flipped && 'lg:order-3'} flex flex-col col-span-1 h-full justify-evenly`}>
            <div className='text-3xl font-bold tracking-wide whitespace-pre-line md:whitespace-nowrap'>
                {props.data.emoji} {props.data.title} <span className='text-sm'>({props.data.date})</span>
            </div>
            <div className='text-lg mt-10 tracking-wide'>{props.data.desc}</div>
            <p className='mt-5'>
                {props.data.tags?.map((v: string, i: number) => {
                    return (
                        <span className={tagStyle} key={i}>
                            {v}
                        </span>
                    );
                })}
            </p>
            <a href={props.data.link} target='_blank'>
                <button
                    aria-label='Go to Crystal Details'
                    type='button'
                    className='mt-5 md:inline-flex py-3 px-2 md:px-12 rounded-md w-full bg-[#2f2b2b] dark:bg-white text-white dark:text-black items-center justify-center general-ring-state font-medium'
                >
                    Visit {props.data.title}
                </button>
            </a>
        </div>
    );
};

export default Projects;
