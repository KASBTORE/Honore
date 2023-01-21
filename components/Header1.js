import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SearchField from "react-search-field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple, faMagnifyingGlass, faBars, faSquareXmark, faUser, faBalanceScale, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import LogoB from '../img/logo/logo-black.png'
import Logo from '../img/logo/logo.png'
import World from '../img/icon/world.png'
import Image from "next/image";
import ResponsiveNav from './responsiveNav';
import Link from "next/link";
export default function Header1({ carts }) {
    const [nav, setNav] = useState(false)
    const router = useRouter()
    const [search, setSearch] = useState("")
    const [total, setTotal] = useState(0)


    useEffect(() => {
        let t = carts.map((p, i) => {
            console.log(total)
            console.log(i);
            return p.price;
        })
        let total1 = 0
        console.log(t);
        for (let i = 0; i < t.length; i++) {
            total1 += t[i]

        }
        console.log(total1);
        setTotal(total1)
    }, [carts])
    const [classes, setClasses] = useState([])
    const handleClick = (e) => {
        setNav(true)
        setClasses(["visible-h-sidebar", "overlay-open"])
        console.log("clicked bars");
    }
    const onChange = (e) => {
        setSearch(e.target.value)

    }
    const onClick = () => {
        router.push(`/search/${search}`)
    }
    return (
        <>
            <header class="header-area d-none d-lg-block">
                <div class="header-top-3">
                    <div class="container">
                        <div class="row">
                            <div class="col-xxl-4 col-lg-4">
                                <div class="top-left-3 d-inline-block">
                                    <div class="header-contact-3">
                                        <a href=""><FontAwesomeIcon icon={faHeadphonesSimple} /> +250 788 458 897</a>
                                    </div>
                                </div>
                                <div class="select-boxes select-boxes-3">
                                    <div class="select-default select-default-3">
                                        <button><a href="https://www.instagram.com/kabstore_rw/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></button>

                                    </div>
                                    <div class="select-default ml-10">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-8  col-lg-8">
                                <div class="header-right-3 text-end">
                                    <div class="h-top-list-3 d-inline-block">
                                        <Link href={"/register"} className="header-cart-3"><FontAwesomeIcon className="mr-2" icon={faUser} />Log in / Register </Link>
                                        <Link href={"/register"} className="header-cart-3"><FontAwesomeIcon className="mr-2" icon={faBalanceScale} />Compare</Link>
                                        <Link href={"/register"} className="header-cart-3"><FontAwesomeIcon className="mr-2" icon={faHeart} />Wishlist</Link>
                                        <Link href={"/cart"} className="header-cart-3"><FontAwesomeIcon className="mr-2" icon={faShoppingBag} />{carts.length} / Rwf{total}</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="header-main-3 p-rel">
                    <div class="container">
                        <div class="header-wrap-3">
                            <div class="logo">
                                <Image src={LogoB} width={200}></Image>
                            </div>
                            <div class="header-form-3">
                                <form action="#">
                                    <input type="text" placeholder="Search anything here.." onChange={onChange}></input>
                                    <button onClick={onClick}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                                </form>
                            </div>
                            <div class="header-nav header-nav-3">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li class="menu-item-has-children no-after"><a href="./">Home</a> </li>
                                        <li class="menu-item-has-children has-mega no-after"><a href="shop">Shop</a>  </li>

                                        <li><a href="contact">Contact us</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="header-action-3 d-none d-xxl-block">
                                <div class="single-item mr-30">
                                    <div class="single-action-3">
                                        <div class="thumb">
                                            <Image src={World} width={30} />
                                        </div>
                                        <div class="content">
                                            <a href="shop">Kigali</a>
                                            <a href="shop"><span>Free Shipping</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-item">
                                    <div class="single-action-3">
                                        <div class="thumb">
                                            <img src="assets/img/icon/world.png" alt="" />
                                            <Image src={World} width={30} />
                                        </div>
                                        <div class="content">
                                            <a href="contact">24 Support</a>
                                            <a href="tel:+250 788 458 897"><span>+250 788 458 897</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="mobile-header d-lg-none">
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <div class="logo">
                                <a href="./"><Image src={Logo} width={200} /></a>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="bar-icon text-end">
                                <button class="toggle-nav-menu sidebar-menu-toggle" onClick={handleClick}>
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {nav && <ResponsiveNav classes={classes} />}
            <div class="epix-breadcrumb-area mb-40">
                <div class="container">
                    <h4 class="epix-breadcrumb-title">SHOP PAGE</h4>
                    <div class="epix-breadcrumb">
                        <ul>
                            <li>Home</li>
                            <li><span>Shop Page</span></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}