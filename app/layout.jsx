import Script from "next/script";
import ScriptLoader from "./components/ScriptLoader";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/images/icon.webp" type="image/webp" />
                <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
                <link href="css/plugins.css" rel="stylesheet" type="text/css" />
                <link href="css/swiper.css" rel="stylesheet" type="text/css" />
                <link href="css/style.css" rel="stylesheet" type="text/css" />
                <link href="css/coloring.css" rel="stylesheet" type="text/css" />
                <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" />
            </head>
            <body>
                {/* <Header /> */}
                {children}
                <Script src="js/vendors.js" strategy="beforeInteractive" />
                <Script src="js/swiper.js" strategy="beforeInteractive" />
                <ScriptLoader />
                
            </body> 
        </html>
    );
}