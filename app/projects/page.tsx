/** @format */
import Image from 'next/image';
interface Iprojects {
    title: string;
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
            desc: 'Worked with the design and marketing team to developer a responsive web application built from ground up using WordPress PHP framework, with high focus on design suitable for all platforms and Search Engine Optimization, to achieve the best online presence and highest rankings.',
            img: '/crystaldetails.jpg',
            tags: ['JavaScript', 'Html', 'CSS', 'UI/UX'],
            link: 'https://www.crystaldetails.co.uk/',
            flipped: false,
        },
        {
            title: 'Evol-ve',
            desc: 'Worked with the design and marketing team to developer a responsive web application built from ground up using WordPress PHP framework, with high focus on design suitable for all platforms and Search Engine Optimization, to achieve the best online presence and highest rankings.',
            img: '/evolve.jpg',
            tags: ['JavaScript', 'Html', 'CSS', 'UI/UX'],
            link: 'https://www.evol-ve.com/',
            flipped: true,
        },
    ];

    return (
        <main>
            <h1 className='text-4xl text-center text-blue-500 mt-10 mb-2 tracking-wide'>My Projects</h1>
            <h2 className='text-5xl text-center tracking-wide font-bold mb-20'>Check out some of my work.</h2>
            <div className='flex flex-col my-10 gap-20'>
                {projects.map((v: Iprojects, i: number) => {
                    return <ProjectCard data={v} key={i} />;
                })}
            </div>
        </main>
    );
};

const ProjectCard = (props: { data: Iprojects }) => {
    const tagStyle = 'inline-block bg-gray-200 dark:bg-[#2f2b2b] text-sm leading-5 mr-2 mb-2 px-4 py-2 rounded-full';

    return (
        <div className='grid grid-cols-3 gap-10'>
            <div className={`${props.data.flipped && 'order-3'} flex flex-col col-span-1`}>
                <div className='text-3xl font-bold tracking-wide'>
                    {props.data.title} <span className='text-base'>(Dec 2023)</span>
                </div>
                <div className='text-lg mt-10 tracking-wide'>{props.data.desc}</div>
                <p className='mt-5'>
                    {props.data.tags.map((v: string, i: number) => {
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
            <Image
                src={props.data.img}
                alt={props.data.title}
                width={800}
                height={800}
                className={`${
                    props.data.flipped && 'order-1'
                } object-fill bg-no-repeat rounded-lg w-full h-full col-span-2`}
            />
        </div>
    );
};

export default Projects;
