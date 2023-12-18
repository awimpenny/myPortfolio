/** @format */

'use client';
import '@/app/globals.css';
import { ThemeProvider } from 'next-themes';
import NavBar from '@/components/navBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <ThemeProvider enableSystem={true} attribute='class'>
                    <div className='bg-white dark:bg-[#181616] min-h-screen overflow-hidden'>
                        <NavBar />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
