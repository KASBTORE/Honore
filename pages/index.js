import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faComputer, faEye, faTelevision, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faHeadphonesSimple, faMobile } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faUsb } from '@fortawesome/free-brands-svg-icons'
import Image from "next/image";
import ProductImg from '../img/product.jpeg';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header1 from "components/Header1";
import Timer from "components/Timer";
import Footer from "components/Footer";
import Logo from "../img/logo/logo-design.PNG"
import Banner from "img/banner/video-banner.jpg"
import Banner1 from "img/banner/page-3-banner-2.jpg"
import Banner2 from "img/banner/page-3-banner-2.jpg"
import Slider1 from '../img/slider/main-banner-4.jpg'
import Slider2 from '../img/slider/main-banner-5.jpg'
import Banner4 from "img/banner/banner-2-2.jpg"
import Banner5 from "img/banner/offer-banner-3.jpg"
import Banner3 from '../img/banner/banner-2-1.jpg'
import Pic2 from '../img/product/2.jpg'
import FeaturedProduct from '../img/banner/featured-banner.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import Login from 'components/LoginAuth';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
export default function HomePage({ products, carts, isLoading, promProduct }) {
    const { data: session } = useSession();
    const [openW, setOpenW] = useState(true);
    const [messageW, setMessageW] = useState(false);
    console.log(session)
    // if (!session?.id) {

    //     try {
    //         console.log(JSON.stringify({ username: user.name, email: user.email, password: `${user.id + user.name}` }));
    //         fetch(`http://localhost:4000/user`, {
    //             method: 'POST',
    //             body: JSON.stringify({ username: user.name, email: user.email, password: "?Dh3444440" }),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },

    //         }).then((res) => { console.log("After sign in with google", res.json()) });

    //         ;
    //     } catch (error) {
    //         console.error("Failed to sign in:", error);
    //         return false;
    //     }
    // }

    useEffect(() => {
        if (session) {
            setOpenW(true)
            setMessageW(true)
        }


    }, [session])
    const router = useRouter();
    const [isRefreshing, setIsRefreshing] = useState(false);
    const refreshData = () => {
        router.replace(router.asPath);
        setIsRefreshing(true);
    };
    useEffect(() => {
        setIsRefreshing(false);
    }, [carts]);
    console.log(promProduct);
    const categories = ["headphones", "television", "accessories", "phone", "computers"]
    const [category, setCategory] = useState(categories[0])
    const [selectedId, setSelectedId] = useState(0);
    const [selectedDId, setSelectedDId] = useState(0);
    const [progress, setProgress] = useState(false)
    const discounts1 = products.map((product) => product.discount)
    const discounts = Array.from(new Set(discounts1))


    function handleClick(id) {
        setSelectedId(id);
    }
    function handleClickD(id) {
        setSelectedDId(id);
    }

    const [filteredProducts, setFilteredProducts] = useState(products.filter(
        product => {
            return (

                product
                    .category
                    .toLowerCase()
                    .includes(categories[0])
            );
        }
    ))
    console.log("This are the", filteredProducts);
    const [filteredDProducts, setFilteredDProducts] = useState(products.filter(
        product => {
            return (

                product
                    .discount
                    .toLowerCase()
                    .includes("25")
            );
        }
    ))
    const tabClick = (category) => {
        setFilteredProducts(products.filter(
            product => {
                return (

                    product
                        .category
                        .toLowerCase()
                        .includes(category)
                );
            }
        ))

    }
    const tabClickD = (discount) => {
        setFilteredDProducts(products.filter(
            product => {
                return (

                    product
                        .discount
                        .toLowerCase()
                        .includes(discount)
                );
            }
        ))

    }
    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#000',
                darker: '#053e85',
            },
            neutral: {
                main: '#fff',
                contrastText: '#fff',
            },
        },
    });
    const [messageId, setMessageId] = useState()
    const [open, setOpen] = useState(true);
    const [message, setMessage] = useState(false);
    const [alert, setAlert] = useState("");
    const cartAdd = async (product, index) => {
        setProgress(true)
        // console.log(message);
        if (session) {

            try {
                const api = await fetch(`http://localhost:4000/user/${session.id}/cart`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: product._id,
                        name: product.name,
                        category: product.category,
                        price: product.price,
                        discount: product.discount,
                        status: product.status,
                        picture: product.picture


                    })
                })
                const data = await api.json()

                if (data) {
                    console.log("Message coming");
                    console.log(data);
                    setMessage(true)
                    setOpen(true)
                    setAlert(data.message)
                    setMessageId(index)
                    refreshData()
                    setProgress(false)
                    console.log(message);
                    console.log(data);
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            router.push('/login')

        }


    }
    return (
        <>

            {messageW && <ThemeProvider theme={theme}>
                <Collapse in={openW} className="w-[30%]">
                    <Alert
                        color='primary'
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpenW(false);
                                    setMessageW(false);
                                    console.log("Message", messageW);

                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Welcome back <br /> {session.name} <FontAwesomeIcon className='ml-2' />
                    </Alert>
                </Collapse>
            </ThemeProvider>}
            <Header1 carts={carts} />





            <main>
                {/* <div id="loading">
                    <div id="loading-center">
                        <div id="loading-center-absolute">
                            <div class="logo-loader"><Image src={Logo} width={200} /></div>
                        </div>
                    </div>
                </div> */}

                <div class="slider-area">
                    <div class="pl-20 pr-20">
                        <div class="row row-20">
                            <div class="col-xxl-6 col-lg-6 slider-col-3-1">
                                <div class="slider-active-2 swiper-container">
                                    <Swiper
                                        pagination={{
                                            dynamicBullets: true,
                                        }}
                                        modules={[Pagination]}
                                        className="mySwiper">
                                        <SwiperSlide>
                                            <div className="single-slider mb-20 mb-md-0 d-block slider-height-3  d-flex align-items-center data-background" style={{ backgroundImage: `url(${Slider1.src})` }}>
                                                <div class="slider-content-3">
                                                    <h5 class="slide-subtitle-3">bang & olufsen</h5>
                                                    <h2 class="slide-title-3">Beoplay a1</h2>
                                                    <p>KABSTORE is World’s largest otd online marketplace<br />
                                                        the connecting buyers with suppliers.</p>
                                                    <a href="shop" class="transparent-btn">Explore Now <i class="fal fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-slider mb-20 mb-lg-0 d-block slider-height-3  d-flex align-items-center data-background" style={{ backgroundImage: `url(${Slider2.src})` }}>
                                                <div class="slider-content-3">
                                                    <h5 class="slide-subtitle-3">bang & olufsen</h5>
                                                    <h2 class="slide-title-3">Beoplay a1</h2>
                                                    <p>KABSTORE is World’s largest otd online marketplace<br />
                                                        the connecting buyers with suppliers.</p>
                                                    <a href="shop" class="transparent-btn">Explore Now <i class="fal fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="data-background single-slider mb-30 mb-lg-0 d-block slider-height-3  d-flex align-items-center" style={{ backgroundImage: `url(${Slider1.src})` }}>
                                                <div class="slider-content-3">
                                                    <h5 class="slide-subtitle-3">bang & olufsen</h5>
                                                    <h2 class="slide-title-3">Beoplay a1</h2>
                                                    <p>KABSTORE is World’s largest otd online marketplace<br />
                                                        the connecting buyers with suppliers.</p>
                                                    <a href="shop" class="transparent-btn">Explore Now <i class="fal fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="data-background single-slider mb-30 mb-lg-0 d-block slider-height-3  d-flex align-items-center" style={{ backgroundImage: `url(${Slider2.src})` }}>
                                                <div class="slider-content-3">
                                                    <h5 class="slide-subtitle-3">bang & olufsen</h5>
                                                    <h2 class="slide-title-3">Beoplay a1</h2>
                                                    <p>KABSTORE is World’s largest otd online marketplace<br />
                                                        the connecting buyers with suppliers.</p>
                                                    <a href="shop" class="transparent-btn">Explore Now <i class="fal fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
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
                                                <FontAwesomeIcon icon={faComputer} size='3x' />
                                            </div>
                                            <div class="cat-link">
                                                Computers
                                            </div>
                                        </a>
                                    </div>
                                    <div class="single-category category-3 text-center d-inline-block">
                                        <a href="shop">
                                            <div class="cat-icon">
                                                <FontAwesomeIcon icon={faMobile} size='3x' />
                                            </div>
                                            <div class="cat-link">
                                                Smartphones
                                            </div>
                                        </a>
                                    </div>
                                    <div class="single-category category-3 text-center d-inline-block">
                                        <a href="shop">
                                            <div class="cat-icon">
                                                <FontAwesomeIcon icon={faHeadphonesSimple} size='3x' />
                                            </div>
                                            <div class="cat-link">
                                                Headphones
                                            </div>
                                        </a>
                                    </div>
                                    <div class="single-category category-3 text-center d-inline-block">
                                        <a href="shop">
                                            <div class="cat-icon rotate-90">
                                                <FontAwesomeIcon icon={faUsb} size='3x' />
                                            </div>
                                            <div class="cat-link">
                                                Accessories
                                            </div>
                                        </a>
                                    </div>
                                    <div class="single-category category-3 text-center d-inline-block">
                                        <a href="shop">
                                            <div class="cat-icon">
                                                <FontAwesomeIcon icon={faTelevision} size='3x' />
                                            </div>
                                            <div class="cat-link">
                                                Television
                                            </div>
                                        </a>
                                    </div>
                                    <div class="single-category category-3 text-center d-inline-block">
                                        <a href="shop">
                                            <div class="cat-icon">
                                                <FontAwesomeIcon icon={faScrewdriverWrench} size='3x' />
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
                                    {categories.map((category, i) => {

                                        return <li key={i} class="nav-item" role="presentation">
                                            <button className={selectedId === i ? "active" : ""}
                                                onClick={() => {
                                                    handleClick(i)
                                                    tabClick(category)
                                                }} data-bs-toggle="tab" data-bs-target="#tab1" type="button">{category}</button>
                                        </li>


                                    }


                                    )}


                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="tab1">
                                    <div class="swiper-container tab-product-active">
                                        <Swiper
                                            slidesPerGroup={3}
                                            slidesPerView={3}
                                        >
                                            {filteredProducts.map((product, index) => {
                                                return (<SwiperSlide>
                                                    <div class="single-product-4">
                                                        <div class="product-top">
                                                            <div class="wrap">
                                                                <span class="epix-p-subtitle">{product.category}</span>
                                                                <div class="actions">
                                                                    <Link href={`/product/${encodeURIComponent(product._id)}`} ><i class="fal fa-compress-alt"></i></Link>
                                                                    <a><i class="fal fa-heart"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="thumb">
                                                                <div class="epix-action">
                                                                    <Link href={`/product/${encodeURIComponent(product._id)}`} class="p-cart product-popup-toggle">
                                                                        <FontAwesomeIcon icon={faEye} />

                                                                    </Link>
                                                                    <a class="p-cart product-popup-toggle">
                                                                        <button onClick={() => {
                                                                            if (session) {
                                                                                console.log("session")
                                                                                return cartAdd(product, index)

                                                                            }
                                                                            else {
                                                                                console.log("No session");

                                                                            }

                                                                        }}>
                                                                            {progress && <ThemeProvider theme={theme}> <CircularProgress className='mt-[10px]' color='neutral' size={20} /></ThemeProvider>}
                                                                            {!progress && <FontAwesomeIcon icon={faCartShopping} />}
                                                                        </button>
                                                                    </a>
                                                                </div>
                                                                <Link href={`/product/${encodeURIComponent(product._id)}`} >
                                                                    <Image src={ProductImg} width={250} height={100} />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div class="content">
                                                            <h4><Link href={`/product/${encodeURIComponent(product._id)}`} >{product.name}</Link></h4>
                                                            <div class="price-box">
                                                                <span class="price">RWF {product.price} </span>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    {console.log(message)}
                                                    {

                                                        messageId === index && message && <ThemeProvider theme={theme}>
                                                            <Collapse in={open}>
                                                                <Alert
                                                                    color='primary'
                                                                    action={
                                                                        <IconButton
                                                                            aria-label="close"
                                                                            color="inherit"
                                                                            size="small"
                                                                            onClick={() => {
                                                                                setOpen(false);
                                                                                setMessage(message)
                                                                                setMessageId()
                                                                            }}
                                                                        >
                                                                            <CloseIcon fontSize="inherit" />
                                                                        </IconButton>
                                                                    }
                                                                    sx={{ mb: 2 }}
                                                                >
                                                                    {alert} <FontAwesomeIcon className='ml-2' icon={faCartShopping} />
                                                                </Alert>
                                                            </Collapse>
                                                        </ThemeProvider>}
                                                </SwiperSlide>


                                                )

                                            })}





                                        </Swiper>
                                    </div>
                                </div>



                            </div >
                        </div >
                    </div >

                </div >


                <div class="offer-banner-2 pt-110 pb-110 bg-default mb-100 data-background" style={{ backgroundImage: `url(${Banner5.src})` }}>
                    <div class="container">
                        <div class="offer-banner-2-content pt-60 pb-35">
                            <div class="offer-product-box">
                                <Image src={Pic2} alt="" />
                            </div>
                            <div class="offer-product-content">
                                <div class="wrap">
                                    <span class="epix-p-subtitle d-block">{promProduct[0].category}</span>
                                    <h3 class="title"><a href="product?details=">{promProduct[0].name}</a></h3>
                                    <div class="price-box">
                                        <span class="price"><span class="active">RWF {promProduct[0].price}</span></span>

                                    </div>
                                </div>
                                {console.log(promProduct[0].duration)}
                                <Timer initialTime={Date.parse(promProduct[0].duration) / 1000} />

                            </div>
                        </div>
                    </div>
                </div>

                <div class="featured-product-area pb-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-xxl-3 col-lg-3 trending-col-1">
                                <div class="trending-banner">
                                    <a href="shop"><Image src={FeaturedProduct} class="img-fluid" alt="" /></a>
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

                                                    {
                                                        discounts.map((discount, index) => (<li key={index} class="nav-item" role="presentation">
                                                            <button className={selectedDId === index ? "active" : ""} data-bs-toggle="tab" data-bs-target="#tab-2-1" type="button" onClick={() => {
                                                                tabClickD(discount)
                                                                handleClickD(index);
                                                            }}>{discount} Off</button>
                                                        </li>))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content-2">
                                    <div class="tab-content" id="myTabContent2">
                                        <div class="tab-pane fade show active" id="tab-2-1">
                                            <div class="trending-active swiper-container">
                                                <Swiper
                                                    slidesPerGroup={3}
                                                    slidesPerView={3}
                                                >
                                                    {filteredDProducts.map((product, index) => (
                                                        <SwiperSlide>
                                                            <div class="single-product-4">
                                                                <div class="product-top">
                                                                    <div class="wrap">
                                                                        <span class="epix-p-subtitle">{product.category}</span>
                                                                        <div class="actions">
                                                                            <Link href={`/product/${encodeURIComponent(product._id)}`} ><i class="fal fa-compress-alt"></i></Link>
                                                                            <a><i class="fal fa-heart"></i></a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="thumb">
                                                                        <div class="epix-action">
                                                                            <Link href={`/product/${encodeURIComponent(product._id)}`} class="p-cart product-popup-toggle">
                                                                                <FontAwesomeIcon icon={faEye} />

                                                                            </Link>
                                                                            <a class="p-cart product-popup-toggle">
                                                                                <button onClick={() => {
                                                                                    return cartAdd(product, index)
                                                                                }}>
                                                                                    {progress && <ThemeProvider theme={theme}> <CircularProgress className='mt-[10px]' color='neutral' size={20} /></ThemeProvider>}
                                                                                    {!progress && <FontAwesomeIcon icon={faCartShopping} />}
                                                                                </button>
                                                                            </a>
                                                                        </div>
                                                                        <Link href={`/product/${encodeURIComponent(product._id)}`} >
                                                                            <Image src={ProductImg} width={250} height={100} />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div class="content">
                                                                    <h4><Link href={`/product/${encodeURIComponent(product._id)}`} >{product.name}</Link></h4>
                                                                    <div class="price-box">
                                                                        <span class="price">RWF {product.price} </span>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {console.log(message)}
                                                            {

                                                                messageId === index && message && <ThemeProvider theme={theme}>
                                                                    <Collapse in={open}>
                                                                        <Alert
                                                                            color='primary'
                                                                            action={
                                                                                <IconButton
                                                                                    aria-label="close"
                                                                                    color="inherit"
                                                                                    size="small"
                                                                                    onClick={() => {
                                                                                        setOpen(false);
                                                                                        setMessage(message)
                                                                                        setMessageId()
                                                                                    }}
                                                                                >
                                                                                    <CloseIcon fontSize="inherit" />
                                                                                </IconButton>
                                                                            }
                                                                            sx={{ mb: 2 }}
                                                                        >
                                                                            {alert} <FontAwesomeIcon className='ml-2' icon={faCartShopping} />
                                                                        </Alert>
                                                                    </Collapse>
                                                                </ThemeProvider>}
                                                        </SwiperSlide>


                                                    ))}

                                                </Swiper>
                                            </div>
                                        </div>

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
                                        <Image src={Banner3} class="img-fluid" alt="" />
                                    </div>
                                    <div class="content">
                                        <h3>Earburds</h3>
                                        <p>KABSTORE is World largest marketplace<br />
                                            connecting buyers suppliers.</p>
                                        <a href="shop" class="transparent-btn text-capitalize rounded-0">Purchase It <i class="fal fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-lg-6">
                                <div class="banner-3-1 style-2 mb-30">
                                    <div class="thumb">
                                        <Image src={Banner4} class="img-fluid" alt="" />
                                    </div>
                                    <div class="content">
                                        <h3>Monitors</h3>
                                        <p>KABSTORE is World largest marketplace<br />
                                            connecting buyers suppliers.</p>
                                        <a href="shop" class="transparent-btn text-capitalize rounded-0">Explore Now <i class="fal fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main >
            <Footer />
        </>

    )
}


export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    const products = await fetch('http://localhost:4000/product')
        .then(response => response.json())

    let carts = []
    if (session) {
        console.log("Doing this is in index", session);
        console.log(session.id);
        carts = await fetch(`http://localhost:4000/user/${session.id}/cart`)
            .then(response => response.json())
        console.log("hello here area the carts", carts);
    }



    const promProduct = await fetch('https://kabstore-7p9q.onrender.com/promproduct')
        .then(response => response.json())
    const { pathname } = ctx
    if (pathname === '/') {
        let isLoading = true
        return {
            props: {
                products, carts, isLoading, promProduct
            }
        }
    }
    return {
        props: {
            products, carts, promProduct
        }
    }

}