/** @format */

'use client';
import '@/app/globals.css';
import { ThemeProvider } from 'next-themes';
import NavBar from '@/components/navBar';
import Footer from '@/components/footer';
import Head from './head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <Head />
            <body>
                <ThemeProvider enableSystem={true} attribute='class'>
                    <div className='bg-white dark:bg-[#181616] min-h-screen overflow-hidden'>
                        <NavBar />
                        <div className='flex flex-col mx-auto max-w-6xl justify-center px-4 relative z-0'>
                            {children}
                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
