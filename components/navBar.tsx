/** @format */
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { LuSun, LuMoonStar } from 'react-icons/lu';
import { FiMenu } from 'react-icons/fi';
import { useTheme } from 'next-themes';

interface Ipages {
    label: string;
    link: string;
}

const NavBar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [menuOpen, setMenuOpen] = useState(false);

    const pages: Ipages[] = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Projects', link: '/projects' },
    ];

    return (
        <div className='relative flex items-center justify-between max-w-6xl px-4 py-6 mx-auto sm:px-6 md:space-x-10'>
            <div className='flex justify-start flex-1 z-10'>
                <span className='relative w-10 h-10 justify-center'>
                    <a href='/'>
                        <Image
                            src={'/small_pfp.png'}
                            alt='Profile Picture'
                            fill
                            className='rounded-md object-contain'
                        />
                    </a>
                </span>
            </div>
            <nav className='hidden space-x-6 text-lg md:flex z-10'>
                {pages.map((v, i) => {
                    return <NavLink data={v} key={i} />;
                })}
            </nav>
            <div className='absolute top-6 right-4 md:hidden z-10'>
                <div className='relative flex flex-col bg-gray-200 dark:bg-[#2f2b2b] text-gray-600 dark:text-white rounded-md items-center justify-center'>
                    <div className='flex'>
                        <span className='sr-only'>Open menu</span>
                        <div className={`${menuOpen ? 'flex' : 'hidden'} w-[250px]`}>
                            <div role='list' className='flex flex-col gap-4 '>
                                <a href='/' className='pl-4 pt-4'>
                                    Home
                                </a>
                                <a href='/about' className='pl-4'>
                                    About
                                </a>
                                <a href='/projects' className='pl-4 pb-4'>
                                    Projects
                                </a>
                            </div>
                            <hr />
                        </div>
                        <div className='p-0.5'>
                            <FiMenu
                                onClick={() => setMenuOpen(!menuOpen)}
                                className={'ml-auto mb-auto p-2 text-4xl cursor-pointer rounded-md'}
                            />
                        </div>
                    </div>
                    <hr className={`${menuOpen ? 'flex' : 'hidden'} w-[90%] mt-3 border-black dark:border-white`} />
                    <button
                        onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
                        aria-label='Toggle Dark Mode'
                        type='button'
                        className={`${
                            menuOpen ? 'flex' : 'hidden'
                        } my-5 text-base w-[90%] flex items-center justify-center py-3 bg-gray-300 rounded-md dark:bg-black/20`}
                    >
                        <div>
                            <LuSun className='hidden dark:block text-xl' />
                            <LuMoonStar className='dark:hidden text-black text-xl' />
                        </div>
                        <p className='ml-3 font-semibold'>
                            Change to {currentTheme === 'light' ? 'dark' : 'light'} theme
                        </p>
                    </button>
                </div>
            </div>
            <div className='items-center justify-end hidden md:flex md:flex-1 z-10'>
                <button
                    onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
                    aria-label='Toggle Dark Mode'
                    type='button'
                    className='flex items-center justify-center w-12 h-12 bg-gray-200 rounded-md dark:bg-[#2f2b2b] text-2xl general-ring-state '
                >
                    <LuSun className='hidden dark:block' />
                    <LuMoonStar className='dark:hidden text-black' />
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
            className="font-bold text-gray-900 dark:text-gray-200 'hidden md:inline-block p-1 sm:px-6 sm:py-2 rounded-full hover:text-blue-500 dark:hover:text-blue-500 transition-all"
            href={props.data.link}
        >
            <span className={`py-1 border-b-2 ${path === props.data.link ? 'border-blue-500' : 'border-transparent'}`}>
                {props.data.label}
            </span>
        </a>
    );
};

export default NavBar;
