import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Head from "next/head";
import { GlobalStyle } from "@/utils/styling";

export const metadata: Metadata = {
  title: "Beyond Design",
  description: "Elevating spaces, creating art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/c00931e8b3cca8082101c210353fe27e?family=NeueHaasDisplay-Mediu"
          rel="stylesheet"
        />
        <link
          href="https://db.onlinewebfonts.com/c/cddfddeff0f66d9f03e9df2585ea819e?family=NeueHaasDisplay-Roman"
          rel="stylesheet"
        />
        <link type="image/svg" rel="icon" href="/icon.svg" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
