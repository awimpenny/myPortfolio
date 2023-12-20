/** @format */
import Image from 'next/image';
import ContactForm from '@/components/about/contact';
interface Iprojects {
    title: string;
    emoji?: string;
    date?: string;
    desc?: string;
    img?: string;
    tags?: string[];
    link?: string;
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
        },
        {
            title: 'Crystal Details',
            img: '/crystaldetails.jpg',
            flipped: false,
        },
        {
            title: 'Evol-ve',
            emoji: '💉',
            date: 'incomplete',
            desc: 'Worked with this client for an extensive time to truly achive what they were after. Once finished I made sure that the (SEO) was done correctly to achive the best online presence.',
            tags: ['JavaScript', 'Html', 'CSS', 'UI/UX'],
            link: 'https://evol-ve.com/',
            flipped: true,
        },
        {
            title: 'Evol-ve',
            img: '/evol-ve.jpg',
            flipped: true,
        },
    ];

    return (
        <main>
            <h1 className='text-lg md:text-xl text-center text-blue-500 mt-10 mb-2 tracking-wide'>MY PROJECTS</h1>
            <h2 className='text-3xl md:text-4xl text-center tracking-wide font-bold mb-20'>
                Check out some of my work.
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-10 lg:gap-y-24 mb-10'>
                {projects.map((v: Iprojects, i: number) => {
                    return <ProjectCard data={v} key={i} />;
                })}
            </div>
            <hr className="h-10 w-full text-center my-16 border-none before:text-2xl before:leading-8 before:text-black  dark:before:text-gray-300 before:content-['~_~_~']"></hr>
            <ContactForm />
        </main>
    );
};

const ProjectCard = (props: { data: Iprojects }) => {
    const tagStyle = 'inline-block bg-gray-200 dark:bg-[#2f2b2b] text-sm leading-5 mr-2 mb-2 px-4 py-2 rounded-full';

    if (props.data.img) {
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
    }

    return (
        <div className={`${props.data.flipped && 'lg:order-3'} flex flex-col col-span-1`}>
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
