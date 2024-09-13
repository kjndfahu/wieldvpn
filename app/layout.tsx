import { ReactNode } from 'react';

interface ErrorProps {
    children: ReactNode;
}

export default function GlobalError({ children }: ErrorProps) {
    return (
        <html style={{background: 'black'}}>
        <body className="bg-black">
        {children}
        </body>
        </html>
    );
}