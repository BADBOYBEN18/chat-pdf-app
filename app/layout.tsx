import { ClerkProvider } from '@clerk/nextjs';
import { Manrope as FontSans } from 'next/font/google';
import './globals.css';

import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <title>Chat to PDF</title>
        <body
          className={cn(
            'min-h-screen h-screen overflow-hidden flex flex-col bg-background font-sans',
            fontSans.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
