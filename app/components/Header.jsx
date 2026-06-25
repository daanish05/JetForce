import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
                                        <Image src="/images/svg-white/bell.svg" className="" alt="" width={16} height={16} />
                                            Get 50% discount for new CCTV installation
                                        </Link>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="topbar-widget me-5">
                                        <Link href="#">
                                        <Image  src="/images/svg-white/phone.svg" className="" alt="" width={16} height={16} />
                                        Call us: (123) 202-9296
                                        </Link>
                                    </div>
                                    <div className="topbar-widget">
                                        <Link href="#">
                                        <Image src="/images/svg-white/envelope.svg" className="" alt="" width={16} height={16} />
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
                                    <Link href="/">
                                    <Image className="logo-main" src="/images/Jetforce-Logo.webp" alt="JetForce logo" width={180} height={40} />
                                    <Image className="logo-scroll" src="/images/Jetforce-Logo.webp" alt="JetForce logo" width={180} height={40} />
                                    <Image className="logo-mobile" src="/images/Jetforce-Logo.webp" alt="JetForce logo" width={120} height={30} />
                                    </Link> 
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li>
                                        <Link className="menu-item" href="/">
                                        Home
                                        </Link>
                                        {/* <ul className="mega">
                                            <li>
                                                <div className="container">
                                                    <div className="sb-menu p-4">
                                                        <div className="row g-4">
                                                            <div className="col-lg-2 col-sm-6 text-center">
                                                                <div className="relative hover text-center overflow-hidden soft-shadow">
                                                                    <Link className="p-0" href="homepage-6.html">
                                                                        <Image src="/images/demo/homepage-6.webp" className="w-100 relative hover-scale-1-1" alt="" width={100} height={100} style={{ height: "auto" }} />
                                                                     </Link>
                                                                 </div>
                                                                 <h6 className="mt-3">New: Homepage 6</h6>
                                                             </div>
                                                             <div className="col-lg-2 col-sm-6 text-center">
                                                                 <div className="relative hover text-center overflow-hidden soft-shadow">
                                                                     <Link className="p-0" href="homepage-5.html">
                                                                         <Image src="/images/demo/homepage-5.webp" className="w-100 relative hover-scale-1-1" alt="" width={100} height={100} style={{ height: "auto" }} />
                                                                     </Link>
                                                                 </div>
                                                                 <h6 className="mt-3">New: Homepage 5</h6>
                                                             </div>
                                                             <div className="col-lg-2 col-sm-6 text-center">
                                                                 <div className="relative hover text-center overflow-hidden soft-shadow">
                                                                     <Link className="p-0" href="/">
                                                                         <Image src="/images/demo/homepage-1.webp" className="w-100 relative hover-scale-1-1" alt="" width={100} height={100} style={{ height: "auto" }} />
                                                                     </Link>
                                                                 </div>
                                                                 <h6 className="mt-3">Homepage 1</h6>
                                                             </div>
                                                             <div className="col-lg-2 col-sm-6 text-center">
                                                                 <div className="relative hover text-center overflow-hidden soft-shadow">
                                                                     <Link className="p-0" href="homepage-2.html">
                                                                         <Image src="/images/demo/homepage-2.webp" className="w-100 relative hover-scale-1-1" alt="" width={100} height={100} style={{ height: "auto" }} />
                                                                     </Link>
                                                                 </div>
                                                                 <h6 className="mt-3">Homepage 2</h6>
                                                             </div>
                                                             <div className="col-lg-2 col-sm-6 text-center">
                                                                 <div className="relative hover text-center overflow-hidden soft-shadow">
                                                                     <Link className="p-0" href="/">
                                                                         <Image src="/images/demo/homepage-3.webp" className="w-100 relative hover-scale-1-1" alt="" width={100} height={100} style={{ height: "auto" }} />
                                                                    </Link>
                                                                </div>
                                                                <h6 className="mt-3">Homepage 3</h6>
                                                            </div>
                                                            <div className="col-lg-2 col-sm-6 text-center">
                                                                <div className="relative hover text-center overflow-hidden soft-shadow">
                                                                    <Link className="p-0" href="homepage-4.html">
                                                                        <Image src="/images/demo/homepage-4.webp" className="w-100 relative hover-scale-1-1" alt="" width={100} height={100} style={{ height: "auto" }} />
                                                                    </Link>
                                                                </div>
                                                                <h6 className="mt-3">Homepage 4</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li><Link className="menu-item" href="services.html">
                                    Services</Link >
                                        {/* <ul>
                                            <li><Link className="menu-item" href="services.html">All Services 1
                                            </Link></li>
                                            <li><Link className="menu-item" href="services-2.html">All Services 2
                                            </Link></li>
                                            <li><Link className="menu-item" href="service-single.html">Service Single
                                            </Link></li>
                                        </ul> */}
                                    </li>
                                    <li><Link className="menu-item" href="brands.html">Brands</Link></li>
                                    <li><Link className="menu-item" href="projects.html">Projects</Link></li>  
                                    {/* <li><Link className="menu-item" href="blog.html">Blog</Link>
                                        <ul>
                                            <li><Link className="menu-item" href="blog.html">Blog Default</Link></li>
                                            <li><Link className="menu-item" href="blog-2.html">Blog Style 2</Link></li>
                                            <li><Link className="menu-item" href="blog-single.html">Blog Single</Link></li>
                                        </ul>
                                    </li> */}
                                    <li><Link className="menu-item" href="contact.html">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="de-flex-col">
                                <div className="menu_side_area" style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                                </div>
                                <Link className="btn-main btn-line fx-slide" href="contact.html"><span>Get a Free Quote</span></Link>
                                <span id="menu-btn"></span>
                                {/* <div id="btn-extra" className="img">
                                    <img src="/images/ui/dots.svg" className="" alt=""  />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;
    