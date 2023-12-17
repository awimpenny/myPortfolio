/** @format */

import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
    title: 'Adam Wimpenny Portfolio',
    description: 'My Personal Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute='class'>
            <html lang='en'>
                <body className={GeistSans.className}>{children}</body>
            </html>
        </ThemeProvider>
    );
}
