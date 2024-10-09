import type { Metadata } from 'next';

import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { NextUIProvider } from '@nextui-org/react';
import Menu from '~/components/navbar';

export const metadata: Metadata = {
  title: 'Skillero',
  description: 'Skillero - The Next Generation of Learning Platform',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ClerkProvider>
        <body>
          <NextUIProvider>
            <Menu/>
            {children}
            </NextUIProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
