import Image from 'next/image';
import './globals.css';
import localFont from 'next/font/local';

export const metadata = {
  title: 'Rick And Morty Dev',
  description: 'Rick And Morty App',
}

const gilroy = localFont({
  src: [
    {
      path: '../assets/fonts/Gilroy-Regular.woff2',
      weight: '400'
    },
    {
      path: '../assets/fonts/Gilroy-Medium.woff2',
      weight: '500'
    },
    {
      path: '../assets/fonts/Gilroy-Bold.woff2',
      weight: '600'
    }
  ],
  variable: '--font-gilroy'
})

const street = localFont({
  src: [
    {
      path: '../assets/fonts/street.woff2',
      weight: '400'
    },
    {
      path: '../assets/fonts/street-bold.woff2',
      weight: '600'
    }
  ],
  variable: '--font-street'
})

const roboto = localFont({
  src: [
    {
      path: '../assets/fonts/roboto-regular.woff2',
      weight: '400'
    }
  ],
  variable: '--font-roboto'
})

const circular = localFont({
  src: [
    {
      path: '../assets/fonts/CircularXXWeb-Book.woff2',
      weight: '400'
    }
  ],
  variable: '--font-circular'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${gilroy.variable} ${street.variable} ${roboto.variable} ${circular.variable}`}>
      <body>
        <header className={`fixed top-0 left-0 z-[999] w-full p-3 bg-[rgba(0,0,0,.3)] transition-[background-color] duration-500 ease-in-out`}>
          <div className={`lg:pl-4`}>
            <Image
              className={`w-[150px] lg:w-[180px]`}
              src='/img/rick-and-morty-logo.png'
              alt='Rick and Morty Logo'
              width={150}
              height={100}
            />
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
