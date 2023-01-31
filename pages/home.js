
import Header1 from "components/Header1";
import Footer from "components/Footer";
import Logo from "../img/logo/logo-design.PNG"
import Banner from "img/banner/video-banner.jpg"
import Banner1 from "img/banner/page-3-banner-2.jpg"
import Banner2 from "img/banner/page-3-banner-2.jpg"
import Image from "next/image";
export default function HomePage() {
    return (
        <>
            <Header1 />

            <Footer />


            <main>
                <div id="loading">
                    <div id="loading-center">
                        <div id="loading-center-absolute">
                            <div class="logo-loader"><Image src={Logo} width={200} /></div>
                        </div>
                    </div>
                </div>

                <div class="slider-area">
                    <div class="pl-20 pr-20">
                        <div class="row row-20">
                            <div class="col-xxl-6 col-lg-6 slider-col-3-1">
                                <div class="slider-active-2 swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="single-slider mb-20 mb-md-0 d-block slider-height-3  d-flex align-items-center" data-background="assets/img/slider/main-banner-4.jpg">
                                                <div class="slider-content-3">
                                                    <h5 class="slide-subtitle-3">bang & olufsen</h5>
                                                    <h2 class="slide-title-3">Beoplay a1</h2>
                                                    <p>KABSTORE is World’s largest otd online marketplace<br />
                                                        the connecting buyers with suppliers.</p>
                                                    <a href="shop" class="transparent-btn">Explore Now <i class="fal fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="single-slider mb-20 mb-lg-0 d-block slider-height-3  d-flex align-items-center" data-background="assets/img/slider/main-banner-5.jpg">
                                                <div class="slider-content-3">
                                                    <h5 class="slide-subtitle-3">bang & olufsen</h5>
                                                    <h2 class="slide-title-3">Beoplay a1</h2>
                                                    <p>KABSTORE is World’s largest otd online marketplace<br />
                                                        the connecting buyers with suppliers.</p>
                                                    <a href="shop" class="transparent-btn">Explore Now <i class="fal fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="single-slider mb-30 mb-lg-0 d-block slider-height-3  d-flex align-items-center" data-background="assets/img/slider/main-banner-4.jpg">
                                                <div class="slider-content-3">
                                                    <h5 class="slide-subtitle-3">bang & olufsen</h5>
                                                    <h2 class="slide-title-3">Beoplay a1</h2>
                                                    <p>KABSTORE is World’s largest otd online marketplace<br />
                                                        the connecting buyers with suppliers.</p>
                                                    <a href="shop" class="transparent-btn">Explore Now <i class="fal fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="single-slider mb-30 mb-lg-0 d-block slider-height-3  d-flex align-items-center" data-background="assets/img/slider/main-banner-5.jpg">
                                                <div class="slider-content-3">
                                                    <h5 class="slide-subtitle-3">bang & olufsen</h5>
                                                    <h2 class="slide-title-3">Beoplay a1</h2>
                                                    <p>KABSTORE is World’s largest otd online marketplace<br />
                                                        the connecting buyers with suppliers.</p>
                                                    <a href="shop" class="transparent-btn">Explore Now <i class="fal fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-paginations pagination-3"></div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-lg-6 slider-col-3-2">
                                <div class="row row-20">
                                    <div class="col-xxl-6 col-sm-6 slider-col-3-3 mb-20">
                                        <div class="video-product-box video-pro-height">
                                            <Image src={Banner1} alt="" />
                                            <a href="https://www.youtube.com/watch?v=LQw2ljPHJU0" class="popup-video"><i class="fal fa-play"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-xxl-6 col-sm-6 slider-col-3-4 mb-20">
                                        <div class="banner-3-1">
                                            <div class="thumb video-pro-height">
                                                <Image src={Banner} class="has-overlay-img" alt="" />
                                            </div>
                                            <div class="content">
                                                <h3>Music Monster</h3>
                                                <p>KABSTORE is World’s largest online<br />
                                                    the connecting buyers.</p>
                                                <a href="shop" class="transparent-btn">Shop Now <i class="fal fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xxl-12">
                                        <div class="banner-3-1">
                                            <div class="thumb video-pro-height-2">
                                                <Image src={Banner2} alt="" />
                                            </div>
                                            <div class="content">
                                                <h3>xBox 5</h3>
                                                <p>KABSTORE is World’s largest online<br />
                                                    the connecting buyers.</p>
                                                <a href="shop" class="transparent-btn">Shop Now <i class="fal fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="category-area category-3-space pt-95 pb-100">
                    <div class="container">
                        <div class="row align-items-center mb-80 category-row-space-3">
                            <div class="col-xxl-3 col-md-5">
                                <div class="epix-section-title-4">
                                    <h3 class="s-title">Find Exactly What You Need</h3>
                                    <p>KABSTORE is World’s largest otd online
                                        marketplace the connecting buyers
                                        with suppliers.</p>
                                </div>
                            </div>
                            <div class="col-xxl-9 col-md-7">
                                <div class="category-wrap category-wrap-3 pl-25">
                                    <div class="single-category category-3 text-center d-inline-block">
                                        <a href="shop">
                                            <div class="cat-icon">
                                                <i class="pe-7s-display1"></i>
                                            </div>
                                            <div class="cat-link">
                                                Computers
                                            </div>
                                        </a>
                                    </div>
                                    <div class="single-category category-3 text-center d-inline-block">
                                        <a href="shop">
                                            <div class="cat-icon">
                                                <i class="pe-7s-phone"></i>
                                            </div>
                                            <div class="cat-link">
                                                Smartphones
                                            </div>
                                        </a>
                                    </div>
                                    <div class="single-category category-3 text-center d-inline-block">
                                        <a href="shop">
                                            <div class="cat-icon">
                                                <i class="pe-7s-headphones"></i>
                                            </div>
                                            <div class="cat-link">
                                                Headphones
                                            </div>
                                        </a>
                                    </div>
                                    <div class="single-category category-3 text-center d-inline-block">
                                        <a href="shop">
                                            <div class="cat-icon">
                                                <i class="pe-7s-usb"></i>
                                            </div>
                                            <div class="cat-link">
                                                Accessories
                                            </div>
                                        </a>
                                    </div>
                                    <div class="single-category category-3 text-center d-inline-block">
                                        <a href="shop">
                                            <div class="cat-icon">
                                                <i class="pe-7s-monitor"></i>
                                            </div>
                                            <div class="cat-link">
                                                Television
                                            </div>
                                        </a>
                                    </div>
                                    <div class="single-category category-3 text-center d-inline-block">
                                        <a href="shop">
                                            <div class="cat-icon">
                                                <i class="pe-7s-tools"></i>
                                            </div>
                                            <div class="cat-link">
                                                Repair
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-tabs">
                            <div class="tab-list">
                                <ul class="nav nav-tabs" id="myTab2" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class=" active" data-bs-toggle="tab" data-bs-target="#tab1" type="button">Headphone (08)</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button data-bs-toggle="tab" data-bs-target="#tab2" type="button">Television
                                            (05)</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button data-bs-toggle="tab" data-bs-target="#tab3" type="button">Accessories (03)</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button data-bs-toggle="tab" data-bs-target="#tab4" type="button">Smartphones (06)</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="tab1">
                                    <div class="swiper-container tab-product-active">
                                        <div class="swiper-wrapper">


                                            <div class="swiper-slide">
                                                <div class="single-product-4">
                                                    <div class="product-top">
                                                        <div class="wrap">
                                                            <span class="epix-p-subtitle"></span>
                                                            <div class="actions">
                                                                <a href="product?details="><i class="fal fa-compress-alt"></i></a>
                                                                <a href="cart"><i class="fal fa-heart"></i></a>
                                                            </div>
                                                        </div>
                                                        <div class="thumb">
                                                            <div class="epix-action">
                                                                <a href="product?details=" class="p-cart product-popup-toggle">
                                                                    <i class="fal fa-eye"></i>
                                                                    <i class="fal fa-eye"></i>
                                                                </a>
                                                                <a href="https://wa.me/250788458897?text=Hello, i'm interested to buy this product, http://kabstore.devslab.io/product?details=" class="p-cart">
                                                                    <i class="fab fa-whatsapp"></i>
                                                                    <i class="fab fa-whatsapp"></i>
                                                                </a>
                                                            </div>
                                                            <a href="product?details="> <img src="" alt=""></a>
                                                        </div>
                                                    </div>
                                                    <div class="content">
                                                        <h4><a href="product?details="></a></h4>
                                                        <div class="price-box">
                                                            <span class="price">RWF </span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="tab2">
                                    <div class="swiper-container tab-product-active">
                                        <div class="swiper-wrapper">

                                            <div class="swiper-slide">
                                                <div class="single-product-4">
                                                    <div class="product-top">
                                                        <div class="wrap">
                                                            <span class="epix-p-subtitle"></span>
                                                            <div class="actions">
                                                                <a href="product?details="><i class="fal fa-compress-alt"></i></a>
                                                                <a href="cart"><i class="fal fa-heart"></i></a>
                                                            </div>
                                                        </div>
                                                        <div class="thumb">
                                                            <div class="epix-action">
                                                                <a href="product?details=" class="p-cart product-popup-toggle">
                                                                    <i class="fal fa-eye"></i>
                                                                    <i class="fal fa-eye"></i>
                                                                </a>
                                                                <a href="https://wa.me/250788458897?text=Hello, i'm interested to buy this product, http://kabstore.devslab.io/product?details=" class="p-cart">
                                                                    <i class="fab fa-whatsapp"></i>
                                                                    <i class="fab fa-whatsapp"></i>
                                                                </a>
                                                            </div>
                                                            <a href="product?details="> <img src="" alt=""></a>
                                                        </div>
                                                    </div>
                                                    <div class="content">
                                                        <h4><a href="product?details="></a></h4>
                                                        <div class="price-box">
                                                            <span class="price">RWF </span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div >
                                    </div >
                                </div >
                                <div class="tab-pane fade" id="tab3">
                                    <div class="swiper-container tab-product-active">
                                        <div class="swiper-wrapper">


                                            <div class="swiper-slide">
                                                <div class="single-product-4">
                                                    <div class="product-top">
                                                        <div class="wrap">
                                                            <span class="epix-p-subtitle"></span>
                                                            <div class="actions">
                                                                <a href="product?details="><i class="fal fa-compress-alt"></i></a>
                                                                <a href="cart"><i class="fal fa-heart"></i></a>
                                                            </div>
                                                        </div>
                                                        <div class="thumb">
                                                            <div class="epix-action">
                                                                <a href="product?details=" class="p-cart product-popup-toggle">
                                                                    <i class="fal fa-eye"></i>
                                                                    <i class="fal fa-eye"></i>
                                                                </a>
                                                                <a href="https://wa.me/250788458897?text=Hello, i'm interested to buy this product, http://kabstore.devslab.io/product?details=" class="p-cart">
                                                                    <i class="fab fa-whatsapp"></i>
                                                                    <i class="fab fa-whatsapp"></i>
                                                                </a>
                                                            </div>
                                                            <a href="product?details="> <img src="" alt=""></a>
                                                        </div>
                                                    </div>
                                                    <div class="content">
                                                        <h4><a href="product?details="></a></h4>
                                                        <div class="price-box">
                                                            <span class="price">RWF </span>

                                                        </div>
                                                    </div>
                                                </div >
                                            </div >
                                            <? php } ?>
                                        </div >
                                    </div >
                                </div >
                                <div class="tab-pane fade" id="tab4">
                                    <div class="swiper-container tab-product-active">
                                        <div class="swiper-wrapper">


                                            <div class="swiper-slide">
                                                <div class="single-product-4">
                                                    <div class="product-top">
                                                        <div class="wrap">
                                                            <span class="epix-p-subtitle"></span>
                                                            <div class="actions">
                                                                <a href="product?details="><i class="fal fa-compress-alt"></i></a>
                                                                <a href="cart"><i class="fal fa-heart"></i></a>
                                                            </div>
                                                        </div>
                                                        <div class="thumb">
                                                            <div class="epix-action">
                                                                <a href="product?details=" class="p-cart product-popup-toggle">
                                                                    <i class="fal fa-eye"></i>
                                                                    <i class="fal fa-eye"></i>
                                                                </a>
                                                                <a href="https://wa.me/250788458897?text=Hello, i'm interested to buy this product, http://kabstore.devslab.io/product?details=" class="p-cart">
                                                                    <i class="fab fa-whatsapp"></i>
                                                                    <i class="fab fa-whatsapp"></i>
                                                                </a>
                                                            </div>
                                                            <a href="product?details="> <img src="" alt=""></a>
                                                        </div>
                                                    </div>
                                                    <div class="content">
                                                        <h4><a href="product?details="></a></h4>
                                                        <div class="price-box">
                                                            <span class="price">RWF </span>

                                                        </div>
                                                    </div>
                                                </div >
                                            </div >

                                        </div >
                                    </div >
                                </div >
                            </div >
                        </div >

                    </div >
                </div >

                <div class="offer-banner-2 pt-110 pb-110 bg-default mb-100" data-background="assets/img/banner/offer-banner-3.jpg">
                    <div class="container">
                        <div class="offer-banner-2-content pt-60 pb-35">
                            <div class="offer-product-box">
                                <img src="assets/img/product/2.jpg" alt="">
                            </div>
                            <div class="offer-product-content">
                                <div class="wrap">
                                    <span class="epix-p-subtitle d-block">Headpones, Office</span>
                                    <h3 class="title"><a href="product?details=">Denon AH-D7100 Music Maniac <br>
                                        Headphones</a></h3>
                                    <div class="price-box">
                                        <span class="price"><span class="active">RWF 205.00</span></span>

                                    </div>
                                </div>
                                <div class="offer-label mb-15">
                                    <span>Hurry up! Offer ends in:</span>
                                </div>
                                <div class="deals-countdown deals-countdown-2 mb-25">
                                    <div class="countdown-inner" data-countdown="" data-date="Mar 02 2022 20:20:22">
                                        <ul>
                                            <li><span data-days="">401</span> Days</li>
                                            <li><span data-hours="">1</span> Hours</li>
                                            <li><span data-minutes="">29</span> min</li>
                                            <li><span data-seconds="">40</span> sec</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="featured-product-area pb-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-xxl-3 col-lg-3 trending-col-1">
                                <div class="trending-banner">
                                    <a href="shop"><img src="assets/img/banner/featured-banner.jpg" class="img-fluid" alt=""></a>
                                    <div class="t-banner-content">
                                        <a href="shop" class="epix-white-btn-2">Smart Phone</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-9 col-lg-9 trending-col-2">
                                <div class="trending-right border-bottom-1 mb-25">
                                    <div class="row align-items-end">
                                        <div class="col-xxl-6 col-md-6">
                                            <div class="epix-section-title-4">
                                                <h3 class="s-title">Featured Products</h3>
                                            </div>
                                        </div>
                                        <div class="col-xxl-6 col-md-6">
                                            <div class="product-tabs-2">
                                                <ul class="nav justify-content-md-end" id="myTab" role="tablist">
                                                    <li class="nav-item" role="presentation">
                                                        <button class="active" data-bs-toggle="tab" data-bs-target="#tab-2-1" type="button">16% Off</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="" data-bs-toggle="tab" data-bs-target="#tab-2-2" type="button" role="tab">25% Off</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="" data-bs-toggle="tab" data-bs-target="#tab-2-3" type="button">33% Off</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content-2">
                                    <div class="tab-content" id="myTabContent2">
                                        <div class="tab-pane fade show active" id="tab-2-1">
                                            <div class="trending-active swiper-container">
                                                <div class="swiper-wrapper">

                                                    <div class="swiper-slide">
                                                        <div class="single-product-4 single-trending-product">
                                                            <div class="product-top">
                                                                <div class="wrap">
                                                                    <span class="epix-p-subtitle"></span>
                                                                    <div class="actions">
                                                                        <a href="product?details="><i class="fal fa-compress-alt"></i></a>
                                                                        <a href="cart"><i class="fal fa-heart"></i></a>
                                                                    </div>
                                                                </div>
                                                                <div class="thumb">
                                                                    <div class="epix-action">
                                                                        <a href="product?details=" class="p-cart product-popup-toggle">
                                                                            <i class="fal fa-eye"></i>
                                                                            <i class="fal fa-eye"></i>
                                                                        </a>
                                                                        <a href="https://wa.me/250788458897?text=Hello, i'm interested to buy this product, http://kabstore.devslab.io/product?details=" class="p-cart">
                                                                            <i class="fab fa-whatsapp"></i>
                                                                            <i class="fab fa-whatsapp"></i>
                                                                        </a>
                                                                    </div>
                                                                    <a href="product?details="> <img src="" alt=""></a>
                                                                </div>
                                                            </div>
                                                            <div class="content">
                                                                <h4><a href="product?details="> </a></h4>
                                                                <div class="price-box">
                                                                    <span class="price">RWF </span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="tab-2-2">
                                            <div class="trending-active swiper-container">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <div class="single-product-4 single-trending-product">
                                                            <div class="product-top">
                                                                <div class="wrap">
                                                                    <span class="epix-p-subtitle"></span>
                                                                    <div class="actions">
                                                                        <a href="product?details="><i class="fal fa-compress-alt"></i></a>
                                                                        <a href="cart"><i class="fal fa-heart"></i></a>
                                                                    </div>
                                                                </div>
                                                                <div class="thumb">
                                                                    <div class="epix-action">
                                                                        <a href="product?details=" class="p-cart product-popup-toggle">
                                                                            <i class="fal fa-eye"></i>
                                                                            <i class="fal fa-eye"></i>
                                                                        </a>
                                                                        <a href="https://wa.me/250788458897?text=Hello, i'm interested to buy this product, http://kabstore.devslab.io/product?details=" class="p-cart">
                                                                            <i class="fab fa-whatsapp"></i>
                                                                            <i class="fab fa-whatsapp"></i>
                                                                        </a>
                                                                    </div>
                                                                    <a href="product?details="> <img src="" alt=""></a>
                                                                </div>
                                                            </div>
                                                            <div class="content">
                                                                <h4><a href="product?details="> </a></h4>
                                                                <div class="price-box">
                                                                    <span class="price">RWF </span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div >

                                                </div >
                                            </div >
                                        </div >
                                        <div class="tab-pane fade" id="tab-2-3">
                                            <div class="trending-active swiper-container">
                                                <div class="swiper-wrapper">

                                                    <div class="swiper-slide">
                                                        <div class="single-product-4 single-trending-product">
                                                            <div class="product-top">
                                                                <div class="wrap">
                                                                    <span class="epix-p-subtitle"></span>
                                                                    <div class="actions">
                                                                        <a href="product?details="><i class="fal fa-compress-alt"></i></a>
                                                                        <a href="cart"><i class="fal fa-heart"></i></a>
                                                                    </div>
                                                                </div>
                                                                <div class="thumb">
                                                                    <div class="epix-action">
                                                                        <a href="product?details=" class="p-cart product-popup-toggle">
                                                                            <i class="fal fa-eye"></i>
                                                                            <i class="fal fa-eye"></i>
                                                                        </a>
                                                                        <a href="https://wa.me/250788458897?text=Hello, i'm interested to buy this product, http://kabstore.devslab.io/product?details=" class="p-cart">
                                                                            <i class="fab fa-whatsapp"></i>
                                                                            <i class="fab fa-whatsapp"></i>
                                                                        </a>
                                                                    </div>
                                                                    <a href="product?details="> <img src="" alt=""></a>
                                                                </div>
                                                            </div>
                                                            <div class="content">
                                                                <h4><a href="product?details="> </a></h4>
                                                                <div class="price-box">
                                                                    <span class="price">RWF </span>

                                                                </div>
                                                            </div>
                                                        </div >
                                                    </div >
                                                </div >
                                            </div >
                                        </div >
                                    </div >
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
                <div class="banner-area-2 pb-70">
                    <div class="container">
                        <div class="row">
                            <div class="col-xxl-6 col-lg-6">
                                <div class="banner-3-1 style-2 mb-30">
                                    <div class="thumb">
                                        <img src="assets/img/banner/banner-2-1.jpg" class="img-fluid" alt="">
                                    </div>
                                    <div class="content">
                                        <h3>Earburds</h3>
                                        <p>KABSTORE is World largest marketplace<br>
                                            connecting buyers suppliers.</p>
                                        <a href="shop" class="transparent-btn text-capitalize rounded-0">Purchase It <i class="fal fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-lg-6">
                                <div class="banner-3-1 style-2 mb-30">
                                    <div class="thumb">
                                        <img src="assets/img/banner/banner-2-2.jpg" class="img-fluid" alt="">
                                    </div>
                                    <div class="content">
                                        <h3>Monitors</h3>
                                        <p>KABSTORE is World largest marketplace<br>
                                            connecting buyers suppliers.</p>
                                        <a href="shop" class="transparent-btn text-capitalize rounded-0">Explore Now <i class="fal fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main >
        </>

    )
}