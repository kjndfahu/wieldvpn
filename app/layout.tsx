import { ReactNode } from 'react';
import {Montserrat} from "next/font/google";

interface ErrorProps {
    children: ReactNode;
}

const montserrat = Montserrat({
    weight: ['400', '600', '700'],
    subsets: ['latin']
})

export default function GlobalError({ children }: ErrorProps) {
    return (
        <html style={{background: 'black'}}>
        <body className={montserrat.className}>
        {children}
        </body>
        </html>
    );
}