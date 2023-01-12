import React from 'react';
import Image from "next/image";
import Logo from '../img/logo/logo-white.png'
export default function Footer() {
    return (
        <>
            <footer class="footer-area footer-area-3 bg-black-2 footer-3 pt-100">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-3 col-lg-4 footer-address-col">
                            <div class="f-logo mb-40">
                                <a href="./"><Image src={Logo} width={200} /></a>
                            </div>
                            <div class="f-address">
                                <ul>
                                    <li>
                                        <span>Address:</span>
                                        <p>Kigali, Rwanda , M Peace Plaza</p>
                                    </li>
                                    <li>
                                        <span>Support:</span>
                                        <p>+250 788 458 897</p>
                                    </li>
                                    <li>
                                        <span>E-mail:</span>
                                        <div>
                                            <p>info@kabstores.com</p><br />
                                            <p>sales@kabstores.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xxl-9 col-lg-8">
                            <div class="row pl-65 footer-space-3">
                                <div class="col-xxl col-6 col-md-4 col-lg-4">
                                    <div class="footer-widget mb-30">
                                        <h4 class="epix-footer-title">Information</h4>
                                        <ul>
                                            <li><a href="contact">Contact Us</a></li>
                                            <li><a href="contact.html">Delivery Information</a></li>
                                            <li><a href="shop">New products</a></li>
                                            <li><a href="shop">Best sales</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-xxl col-6 col-md-4 col-lg-4">
                                    <div class="footer-widget mb-30">
                                        <h4 class="epix-footer-title">Categories</h4>
                                        <ul>
                                            <li><a href="shop">Headphone</a></li>
                                            <li><a href="shop">Phone &amp; Tablet</a></li>
                                            <li><a href="shop">Game &amp; Console</a></li>
                                            <li><a href="shop">Laptop &amp; Computer</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xxl col-6 col-md-4 col-lg-4">
                                    <div class="footer-widget mb-30">
                                        <h4 class="epix-footer-title">Customer Service</h4>
                                        <ul>
                                            <li><a href="https://goo.gl/maps/JF8rZFvo2qgQsrFW7" target="_blank">Sitemap</a></li>
                                            <li><a href="register.html">Contact Us</a></li>
                                            <li><a href="contact.html">Delivery Information</a></li>
                                            <li>
                                                <a href="https://wa.me/250788458897?text=Hello, I have an inquire" target="_blank">
                                                    Direct message
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div class="footer-copyright-2 bg-black-2-i ">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-9 col-lg-9 col-md-8 text-lg-end">
                            <div class="text-md-end">
                                <p>Copyrights © {"20223"} KABSTORE - Designed By <a href="https://devslab.io/" target="_blank">Devslab</a>. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}