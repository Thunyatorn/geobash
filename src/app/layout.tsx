import "~/styles/globals.css";

import { type Metadata } from "next";
// import { Geist } from "next/font/google";

import localFont from 'next/font/local'

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "GeoBash",
  description: "",
  icons: [{ rel: "icon", url: "/blackslex.ico" }],
};

// const geist = Geist({
//   subsets: ["latin"],
//   variable: "--font-geist-sans",
// });

const geist = localFont({
  src: "../../public/fonts/TimesNewRoman.woff2"
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // <html lang="en" className={`${geist.variable}`}>
    //   <body>
    //     <TRPCReactProvider>{children}</TRPCReactProvider>
    //   </body>
    // </html>
    <html lang="en" className={`${geist.className}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
