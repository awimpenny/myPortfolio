/** @format */

import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <hr className='border-black dark:border-white'></hr>
            <div className='py-12'>
                <div className='grid grid-cols-2'>
                    <div className='md:grid md:grid-cols-2'>
                        <div>
                            <h3 className='text-sm font-semibold tracking-wider uppercase'>General</h3>
                            <div role='list' className='mt-4 space-y-4'>
                                <a
                                    className='block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline'
                                    href='/'
                                >
                                    Home
                                </a>
                                <a
                                    className='block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline'
                                    href='/about'
                                >
                                    About
                                </a>
                                <a
                                    className='block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline'
                                    href='/projects'
                                >
                                    Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between mb-5'>
                <div className='flex items-center order-2 space-x-6'>
                    <a
                        href='https://github.com/awimpenny'
                        target='_blank'
                        className='text-gray-600 dark:text-gray-400 important'
                    >
                        <span className='sr-only'>GitHub</span>
                        <FaGithub className='w-7 h-7 transform hover:rotate-[-4deg] transition' />
                    </a>
                </div>
                <p className='order-1 text-base'>© 2023 Adam Wimpenny</p>
            </div>
        </footer>
    );
};

export default Footer;
