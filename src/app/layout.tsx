import type { Metadata } from "next";
import { Lora, Poppins  } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import NavbarHome from "@/components/NavBar/Navbar";


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        <NavbarHome/>

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
