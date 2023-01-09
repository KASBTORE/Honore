import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import LogoB from '../img/logo/logo-black.png'
import Image from "next/image";
export default function Header1() {
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
                                <input type="text" placeholder="Search anything here.."/>
                                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
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
                                        <img src="assets/img/icon/world.png" alt=""/>
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
                                        <img src="assets/img/icon/world.png" alt=""/>
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
                            <a href="./"><img src="assets/img/logo/logo.png" alt="" width='200'/></a>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="bar-icon text-end">
                            <button class="toggle-nav-menu sidebar-menu-toggle">
                                <i class="fal fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fix">
            <div class="side-info d-lg-none">
                <button class="side-info-close"><i class="fal fa-times"></i></button>
        
                <div class="side__logo mb-25">
                    <a href="./"><img src="assets/img/logo/logo.png" alt="logo" /></a>
                </div>
        
                <div class="mobile-menu"></div>
        
                <div class="contact-infos mt-30 mb-30">
                    <div class="contact-list mb-30">
                        <h4>Contac  t Info</h4>
                        <ul class="p-0">
                            <li><i class="fal fa-map"></i>Kigali, Rwanda M Peace Plaza</li>
                            <li><i class="fal fa-phone-alt"></i><a href="tell:+250 788 458 897">+250 788 458 897</a></li>
                            <li><i class="fal fa-envelope-open"></i><a href="mailto:sales@kabstore.rw">sales@kabstore.rw</a></li>
                        </ul>
                        <div class="sidebar__menu--social">
                            <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                            <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
                            <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
                        </div>
        
                    </div>
                </div>
        
            </div>
        </div>
        <div class="offcanvas-overlay"></div>
        </>
    )
}