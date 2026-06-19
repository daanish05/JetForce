import Navbar from "../components/Navbar";



export default function RootLayout({ children }) {    
    return(
        <>
        <html lang="en">
            <head>
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="stylesheet" href="/css/coloring.css"/> 
                <link rel="stylesheet" href="/css/bootstrap.min.css"/> 
                <link rel="stylesheet" href="/css/colors/scheme-01.css"/> 
            </head>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
        </>
    );
}