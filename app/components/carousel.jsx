import Link from "next/link";
import Image from "next/image";

const carousel = () => {
    return(
        <>
        <section className="text-light no-top no-bottom position-relative overflow-hidden z-1000">
            <div className="v-center">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div
                                className="swiper-inner"
                                data-bgimage="url(/images/background/3.webp)"
                            >
                                <div className="sw-caption">
                                    <div
                                        className="container relative z-2"
                                        data-0="opacity:1"
                                        data-300="opacity:0"
                                    >
                                        <div className="row align-items-center g-4">
                                            <div className="col-lg-6">
                                                <div className="relative z-2">
                                                    <h3 className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">
                                                        Swann
                                                    </h3>
                                                    <h1 className="mb-3 cam-style">
                                                        Crystal Clear View, Night Vision, Smart Motion
                                                        <span />
                                                        <span />
                                                        <span />
                                                        <span />
                                                    </h1>
                                                    <Link className="btn-main btn-line fx-slide mb10 mb-3" href="contact.html">
                                                        <span>Learn More</span>
                                                    </Link>
                                                    <Link className="btn-main fx-slide mb10 mb-3" href="contact.html">
                                                        <span>Buy Now</span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="relative">
                                                    <Image src="/images/products/1.webp" className="w-100 relative z-2" alt="" width={500} height={500} style={{ height: "auto" }} />
                                                    <div className="abs w-70 h-70 abs-centered" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div
                                className="swiper-inner"
                                data-bgimage="url(/images/background/3.webp)"
                            >
                                <div className="sw-caption">
                                    <div
                                        className="container relative z-2"
                                        data-0="opacity:1"
                                        data-300="opacity:0"
                                    >
                                        <div className="row align-items-center g-4">
                                            <div className="col-lg-6">
                                                <div className="relative z-2">
                                                    <h3 className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">
                                                        Honeywell
                                                    </h3>
                                                    <h1 className="mb-3 cam-style">
                                                        Crystal Clear View, Night Vision, Smart Motion
                                                        <span />
                                                        <span />
                                                        <span />
                                                        <span />
                                                    </h1>
                                                    <Link className="btn-main btn-line fx-slide mb10 mb-3" href="contact.html">
                                                        <span>Learn More</span>
                                                    </Link>
                                                    <Link className="btn-main fx-slide mb10 mb-3" href="contact.html">
                                                        <span>Buy Now</span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="relative">
                                                    <Image src="/images/products/2.webp" className="w-100 relative z-2" alt="" width={500} height={500} style={{ height: "auto" }} />
                                                    <div className="abs w-70 h-70 abs-centered" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div
                                className="swiper-inner"
                                data-bgimage="url(/images/background/3.webp)"
                            >
                                <div className="sw-caption">
                                    <div
                                        className="container relative z-2"
                                        data-0="opacity:1"
                                        data-300="opacity:0"
                                    >
                                        <div className="row align-items-center g-4">
                                            <div className="col-lg-6">
                                                <div className="relative z-2">
                                                    <h3 className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">
                                                        Hikvision
                                                    </h3>
                                                    <h1 className="mb-3 cam-style">
                                                        Crystal Clear View, Night Vision, Smart Motion
                                                        <span />
                                                        <span />
                                                        <span />
                                                        <span />
                                                    </h1>
                                                    <Link className="btn-main btn-line fx-slide mb10 mb-3" href="contact.html">
                                                        <span>Learn More</span>
                                                    </Link>
                                                    <Link className="btn-main fx-slide mb10 mb-3" href="contact.html">
                                                        <span>Buy Now</span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="relative">
                                                    <Image src="/images/products/3.webp" className="w-100 relative z-2" alt="" width={500} height={500} style={{ height: "auto" }} />
                                                    <div className="abs w-70 h-70 abs-centered" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination" />
                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next" />
                </div>
            </div>
        </section>
        <section className="pt-40 pb-40 bg-light mt90 bg-dark">
            <div className="wow fadeInRight d-flex">
                <div className="de-marquee-list relative wow">
                    <Image src="/images/logo-brands/1.webp" className="w-300px" alt="" width={300} height={60} />
                    <Image src="/images/logo-brands/2.webp" className="w-300px" alt="" width={300} height={60} />
                    <Image src="/images/logo-brands/3.webp" className="w-300px" alt="" width={300} height={60} />
                    <Image src="/images/logo-brands/4.webp" className="w-300px" alt="" width={300} height={60} />
                    <Image src="/images/logo-brands/5.webp" className="w-300px" alt="" width={300} height={60} />
                    <Image src="/images/logo-brands/6.webp" className="w-300px" alt="" width={300} height={60} />
                </div>
            </div>
        </section>
        </>
    );
}

export default carousel;
