import localFont from "next/font/local";
import "./globals.css";

import { Kodchasan } from 'next/font/google'

export const lindenHill = localFont(
  {
    src: 
    [
      {
        path: '../../cesmusic/public/font/LindenHill-Regular.ttf'
      }
    ],
    variable: "--font-lindenHill-regular"
  }
)

const kodchasan = Kodchasan ({
  subsets: ['latin'],
  variable: '--font-kodchasan',
  weight: '400'
})


export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={kodchasan.className}>
        {children}
      </body>
    </html>
  );
}
