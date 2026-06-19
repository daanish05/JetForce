

export default function RootLayout({ children }) {    
    return(
        <>
        <html lang="en">
            <head>
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="stylesheet" href="/css/coloring.css" />
            </head>
            <body>
                {children}
            </body>
        </html>
        </>
    );
}