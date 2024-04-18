"use client";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import HeaderBackground from "./components/UI/Molecules/HeaderBackground/HeaderBackground";
import Search from "./components/UI/Molecules/Search/Search";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [value, setvalue] = useState("");
  const onClick = (event:FormEvent) => {
    event.preventDefault();
    router.push(`/items?search=${value}`);
  };
  return (
    <html lang="en">
      <Head>
        <title>{"Carolina.."}</title>
      </Head>
      <body className={inter.className}>
        <HeaderBackground>
          <Search
            onSearch={setvalue}
            onClick={onClick}
            placeholder="Buscando productos, marcas y más ..."
          ></Search>
        </HeaderBackground>
        {children}
      </body>
    </html>
  );
}
