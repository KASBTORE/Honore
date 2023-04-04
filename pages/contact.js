import Header1 from "components/Header1";
import Footer from "components/Footer";
import { getSession } from "next-auth/react";
import { faEnvelope, faEnvelopeOpen, faLocation, faMailReply, faMapMarker, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Contact({ carts }) {
    return (
        <>
            <Header1 carts={carts} />

            <section class="contact__area pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6">
                            <div class="contact__info">
                                <h3>Find us here.</h3>
                                <ul class="mb-55">
                                    <li class="d-flex mb-35">
                                        <div class="contact__info-icon mr-20">
                                            <i><FontAwesomeIcon icon={faMapMarker} /></i>
                                        </div>
                                        <div class="contact__info-content">
                                            <h6>Address:</h6>
                                            <span>Makuza Peace Plaza, KN 48 St, Kigali, Rwanda</span>
                                        </div>
                                    </li>
                                    <li class="d-flex mb-35">
                                        <div class="contact__info-icon mr-20">

                                            <i><FontAwesomeIcon icon={faEnvelopeOpen} /></i>
                                        </div>
                                        <div class="contact__info-content">
                                            <h6>Email:</h6>
                                            <span><a href="mailto:info@example.com" class="__cf_email__" data-cfemail="a7e4c8c9d3c6c4d3e7c2d5c2c9d3cfc2cac289c4c8ca">sales@kabstores.com</a></span>
                                        </div>
                                    </li>
                                    <li class="d-flex mb-35">
                                        <div class="contact__info-icon mr-20">
                                            <i><FontAwesomeIcon icon={faMobile} /></i>

                                        </div>
                                        <div class="contact__info-content">
                                            <h6>Number Phone:</h6>
                                            <span>(250) 788 458 897</span>
                                        </div>
                                    </li>
                                </ul>


                                <div class="contact__social">
                                    <ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <div class="contact__form">
                                <h3>Contact Us.</h3>
                                <form action="https://www.devsnews.com/template/KABSTORE/KABSTORE/assets/mail.php" id="contact-form">
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="contact__input">
                                                <label>Name <span class="required">*</span></label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="contact__input">
                                                <label>Email <span class="required">*</span></label>
                                                <input type="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="contact__input">
                                                <label>Subject <span class="required">*</span></label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="contact__input">
                                                <label>Message</label>
                                                <textarea cols="30" rows="10"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="contact__submit">
                                                <button type="submit" class="os-btn os-btn-black">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p class="ajax-response"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
}

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    const carts = await fetch(`http://localhost:4000/user/${session.id}/cart`)
        .then(response => response.json())
    console.log(carts, "This is the carts");
    return {
        props: {
            carts: carts
        }
    }
}