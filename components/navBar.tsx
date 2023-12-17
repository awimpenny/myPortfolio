/** @format */
'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LuSun, LuMoonStar } from 'react-icons/lu';
import { useTheme } from 'next-themes';

interface Ipages {
    label: string;
    link: string;
}

const NavBar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const pages: Ipages[] = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Projects', link: '/projects' },
    ];

    return (
        <div className='flex items-center justify-between max-w-6xl px-4 py-6 mx-auto sm:px-6 md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
                <span className='relative w-10 h-10 justify-center'>
                    <Image src={'/small_pfp.png'} alt='Profile Picture' fill objectFit='contain' />
                </span>
            </div>
            <nav className='hidden space-x-6 text-lg md:flex'>
                {pages.map((v) => {
                    return <NavLink data={v} />;
                })}
            </nav>
            <div className='items-center justify-end hidden md:flex md:flex-1 lg:w-0'>
                <button
                    onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
                    aria-label='Toggle Dark Mode'
                    type='button'
                    className='flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full dark:bg-[#1e293b] text-2xl general-ring-state '
                >
                    <LuSun className='hidden dark:block' />
                    <LuMoonStar className='dark:hidden' />
                </button>
            </div>
        </div>
    );
};

const NavLink = (props: {
    data: {
        link: string;
        label: string;
    };
}) => {
    const path: string = usePathname();

    return (
        <a
            className="font-bold text-gray-900 dark:text-gray-200 'hidden md:inline-block p-1 sm:px-6 sm:py-2 rounded-full hover:text-teal-500 transition-all"
            href={props.data.link}
        >
            <span className={`py-1 border-b-2 border-transparent ${path === props.data.link && 'border-teal-500'} `}>
                {props.data.label}
            </span>
        </a>
    );
};

export default NavBar;
