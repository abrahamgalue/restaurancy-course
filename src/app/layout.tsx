import type {Metadata} from "next";

import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurancy - @abrahamgalue",
  description: 'The best restaurants in the world',
  keywords: ['restaurant', 'food', 'eat', 'dinner', 'lunch'],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-3xl text-rose-600 font-bold leading-[3rem] m-auto p-8">
          <Link href={'/'}>
            <h1>Restaurancy</h1>
          </Link>
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Restaurancy
        </footer>
      </body>
    </html>
  );
}
