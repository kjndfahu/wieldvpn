import type {Metadata} from "next";
import {Inter, Montserrat} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/shared/header";

const montserrat = Montserrat({
    weight: ['400', '600', '700'],
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={montserrat.className} >
            <main className="min-h-screen bg-black">
                <Header/>
                {children}
            </main>
        </body>
        </html>
    );
}
