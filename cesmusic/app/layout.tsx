import "./globals.css";

import { Kodchasan } from 'next/font/google'

const kodchasan = Kodchasan ({
  subsets: ['latin'],
  variable: '--font-kodchasan',
  weight: '400'
})

import { UserContextProvider } from "./context/UserContext";


export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <UserContextProvider>
      <body className={kodchasan.className}>
        {children}
      </body>
      </UserContextProvider>
    </html>
  );
}
