import Image from "next/image";
import Link from "next/link";




export default function Home(){
    return(
        <>
        <header className="transparent">
            <div id="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-between xs-hide">
                                <div className="d-flex">
                                    <div className="topbar-widget">
                                        <Link href="#">
                                        <Image src="/images/svg-white/bell.svg" className="" alt="" width={24} height={24}/>
                                            Get 50% discount for new CCTV installation
                                        </Link>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="topbar-widget me-5">
                                        <Link href="#">
                                        <Image src="/images/svg-white/phone.svg" className="" alt="" width={24} height={24}/>
                                        Call us: (123) 202-9296
                                        </Link>
                                    </div>
                                    <div className="topbar-widget">
                                        <Link href="#">
                                        <Image src="/images/svg-white/envelope.svg" className="" alt="" width={24} height={24}/>
                                        Message us: contact@ucam-cctv.com
                                        </Link>
                                    </div>
                                </div>                 
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div id="logo">
                                    <Link href="index.html">
                                    <Image className="logo-main" src="/images/logo.webp" alt="" width={150} height={40} />
                                    <Image className="logo-scroll" src="/images/logo.webp" alt="" width={150} height={40} />
                                    <Image className="logo-mobile" src="/images/logo.webp" alt="" width={150} height={40} />
                                    </Link>
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li>
                                        <Link className="menu-item" href="index.html">
                                        Home
                                        </Link>
                                        <ul className="mega">
                                            <li>
                                                <div className="container">
                                                    <div className="sb-menu p-4">
                                                        <div className="row g-4">
                                                            <div className="col-lg-2 col-sm-6 text-center">
                                                                <div className="relative hover text-center overflow-hidden soft-shadow">
                                                                    <Link className="p-0" href="homepage-3.html">
                                                                        <Image src="/images/demo/homepage-3.webp" className="w-100 relative hover-scale-1-1" alt="" width={300} height={200} />
                                                                    </Link>
                                                                </div>                            
                                                                <h6 className="mt-3">Homepage 3</h6>                          
                                                            </div>
                                                            </div>
                                                    </div>
                                                </div>                                                
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link className="menu-item" href="services.html">
                                    Services</Link >
                                        <ul>
                                            <li><Link className="menu-item" href="services.html">All Services 
                                            </Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="menu-item" href="brands.html">Brands</Link></li>
                                    <li><Link className="menu-item" href="projects.html">Projects</Link></li>  
                                    <li><Link className="menu-item" href="blog.html">Blog</Link></li>
                                    <li><a className="menu-item" href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                            <div className="de-flex-col">
                                <div className="menu_side_area">          
                                    <a className="btn-main fx-slide" href="contact.html"><span>Get a Free Quote</span></a>
                                    <span id="menu-btn"></span>
                                </div>
                                <div id="btn-extra" className="img">
                                    <Image src="/images/ui/dots.svg" className="" alt="" width={24} height={24}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}