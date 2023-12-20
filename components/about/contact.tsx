/** @format */
'use client';

import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import React from 'react';
import { SendEmail } from '@/app/lib/sendEmail';

export interface IformData {
    fName: string;
    lName: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const [formValues, setFormValues] = React.useState<IformData>({ fName: '', lName: '', email: '', message: '' });
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        await SendEmail(formValues);
        setTimeout(() => {
            setLoading(false), 1000;
            setFormValues({ fName: '', lName: '', email: '', message: '' });
        });
    };

    return (
        <>
            <h1 className='text-lg md:text-xl text-center text-blue-500 mt-5 mb-2 tracking-wide'>GET IN TOUCH</h1>
            <h2 className='text-3xl md:text-4xl text-center tracking-wide font-bold mb-10'>Contact Me</h2>
            <div className='grid gap-10 md:gap-0 grid-cols-1 md:grid-cols-7 w-full justify-center mb-20'>
                <div className='flex flex-col w-full gap-10 md:col-span-3 h-full justify-evenly'>
                    <div className='text-lg flex gap-5 w-full bg-[#2f2b2b] p-4 rounded-md items-center'>
                        <FaPhoneAlt className='text-xl' />
                        <a href='tel:07545410930'>+44 07545410930</a>
                    </div>

                    <div className='text-lg flex gap-5 w-full bg-[#2f2b2b] p-4 rounded-md items-center'>
                        <FaEnvelope className='text-xl' />
                        <a href='mailto:adamwimps2@outlook.com'>adamwimps2@outlook.com</a>
                    </div>
                    <div className='text-lg flex gap-5 w-full bg-[#2f2b2b] p-4 rounded-md items-center'>
                        <FaLocationArrow className='text-xl' />
                        <div>Huddersfield</div>
                    </div>
                </div>
                <div className='w-full h-0.5 md:h-full md:w-0.5 bg-gray-200 mx-auto rounded-md'></div>
                <form
                    onSubmit={handleSubmit}
                    className='grid grid-cols-2 gap-x-5 w-full h-fit bg-[#2f2b2b] md:col-span-3 rounded-md p-5'
                >
                    <input
                        type='text'
                        placeholder='First Name'
                        name='fName'
                        className='outline-none bg-black h-fit p-3 rounded-md'
                        required
                        value={formValues.fName}
                        onChange={handleInputChange}
                    />
                    <input
                        type='text'
                        placeholder='Last Name'
                        name='lName'
                        className='outline-none bg-black h-fit p-3 rounded-md'
                        required
                        value={formValues.lName}
                        onChange={handleInputChange}
                    />
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        className='outline-none bg-black h-fit p-3 rounded-md col-span-2 mt-5'
                        required
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                    <textarea
                        placeholder='Message'
                        name='message'
                        className='outline-none bg-black h-36 resize-none p-3 rounded-md col-span-2 mt-5'
                        required
                        value={formValues.message}
                        onChange={handleInputChange}
                    />
                    <button
                        aria-label='button'
                        type='submit'
                        disabled={loading}
                        className='col-span-2 mt-5 text-sm py-2 px-1 md:px-12 rounded-md w-full bg-[#2f2b2b] dark:bg-white text-white dark:text-black general-ring-state font-medium'
                    >
                        {!loading ? 'Submit' : 'loading...'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
