import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple, faMagnifyingGlass, faBars, faSquareXmark, faMap, faPhoneAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import LogoB from '../img/logo/logo-black1.png'
import Logo from '../img/logo/logo.png'
import Image from "next/image";
export default function ResponsiveNav({ classes }) {
    const [classList, setClassList] = useState([])

    useEffect(() => {
        setClassList(classes)
    }, [classes])

    const handleClick = () => {

        setClassList("", "")

        console.log("clicked");
    }

    return (
        <>
            <div class="fix">
                <div className={`side-info d-lg-none ${classList[0]}`}>
                    <button class="side-info-close" onClick={handleClick}><FontAwesomeIcon icon={faSquareXmark} /></button>

                    <div class="side__logo mb-25">
                        <a href="./"><Image src={Logo} /></a>
                    </div>

                    <div class="mobile-menu mean-container">
                        <div class="mean-nav">
                            <ul>
                                <li class="menu-item-has-children "><a href="./">Home</a> </li>
                                <li class="menu-item-has-children "><a href="shop">Shop</a>  </li>
                                <li><a href="contact">Contact us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="contact-infos mt-30 mb-30">
                        <div class="contact-list mb-30">
                            <h4>Contact Info</h4>
                            <ul class="p-0">
                                <li><FontAwesomeIcon icon={faMap} />Kigali, Rwanda M Peace Plaza</li>
                                <li><FontAwesomeIcon icon={faPhoneAlt} /><a href="tell:+250 788 458 897">+250 788 458 897</a></li>
                                <li><FontAwesomeIcon icon={faEnvelopeOpen} /><a href="mailto:sales@kabstore.rw">sales@kabstore.rw</a></li>
                            </ul>
                            <div class="sidebar__menu--social ">
                                <a href="#" target="_blank" ><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#" target="_blank" ><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#" target="_blank" ><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#" target="_blank" ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                <a href="#" target="_blank" ><FontAwesomeIcon icon={faYoutube} /></a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className={`offcanvas-overlay ${classList[1]}`}></div>

        </>
    )
}
