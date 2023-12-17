/** @format */

'use client';
import '@/app/globals.css';
import { ThemeProvider } from 'next-themes';
import NavBar from '@/components/navBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className='bg-white dark:bg-[#111827] min-h-screen overflow-hidden'>
                <ThemeProvider enableSystem={true} attribute='class'>
                    <NavBar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
