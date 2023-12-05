import type {Metadata} from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurancy",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-3xl text-rose-600 font-bold leading-[3rem] m-auto pt-8">
          <h1>Restaurancy</h1>
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Restaurancy
        </footer>
      </body>
    </html>
  );
}
