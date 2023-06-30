import Image from "next/image";
import ReactImageMagnify from 'react-image-magnify';
import Header1 from "components/Header1";
import Footer from "components/Footer";
import Head from "next/head";
import { getSession } from "next-auth/react";
import PictureColorChanger from "components/PictureColorChanger";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Product({ product, carts }) {
    console.log("product", product);
    return (
        <>
            <Header1 carts={carts} />

            <div class="single-product-area mb-100">
                <div class="container">
                    <div class="row mb-40">
                        <div class="col-xxl-6 col-lg-6">
                            <div class="epix-single-product-left mr-35">
                                <div class="epix-tab-product mb-15">
                                    <div class="epix-product-tab-content">
                                        <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane fade show active" id="epix-single-1">
                                                <div class="epix-single-product-thumb-4">
                                                    <div class="epix-featured">
                                                        <span>{product.status}</span>
                                                    </div>
                                                    <ReactImageMagnify {...{
                                                        smallImage: {
                                                            alt: 'Wristwatch by Ted Baker London',
                                                            src: product.pictures[0],
                                                            width: 466,
                                                            height: 466
                                                        },
                                                        largeImage: {
                                                            src: product.pictures[0],
                                                            width: 1200,
                                                            height: 1800
                                                        }
                                                    }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-lg-6">
                            <div class="epix-single-product-right">
                                <div class="rating">
                                    <FontAwesomeIcon color="gold" icon={faStar} className="active" />
                                    <FontAwesomeIcon color="gold" icon={faStar} className="active" />
                                    <FontAwesomeIcon color="gold" icon={faStar} className="active" />
                                    <FontAwesomeIcon color="gold" icon={faStarHalf} />
                                    <FontAwesomeIcon color="grey" icon={faStar} className="text-grey" />

                                    <faStar class="text-grey" />
                                </div>
                                <h4 class="epix-single-product-title">{product.name}</h4>
                                <p class="epix-product-details-short-description">
                                    {product.description}
                                </p>
                                <p class="price">
                                    <span class="epix-price-amount">
                                        <bdi>
                                            <span class="epix-price-currency-symbol"><faStar /> RWF </span>
                                            {product.price}
                                        </bdi>
                                    </span>
                                </p>
                                <form action="#" class="epix-cart-variation">
                                    <div class="epix-product-label mb-35">
                                        <a href="#" class="title">SERIES CPU</a>
                                        <div class="taglist">
                                            <a href="shop">Core i5</a>
                                            <a href="shop">Core i7</a>
                                            <a href="shop">Core i9</a>
                                        </div>
                                    </div>
                                    <div class="epix-quantity-validation">
                                        <div class="wrap-2 d-block d-sm-inline-block mb-15 mb-sm-0">
                                            <div class="d-inline-block border-gray mr-20">
                                                <div class="epix-quantity-form">
                                                    <div class="cart-plus-minus"></div>
                                                    <input type="text" value="2" />
                                                </div>
                                            </div>


                                            <a href="https://wa.me/250788458897?text=Hello, i'm interested to buy this product, http://kabstore.devslab.io/product?details=<?php print $productId;?>
                                            " class="cart-btn mr-15" style={{ backgroundColor: "#075E54 !important" }}><i class="fab fa-whatsapp"></i> Buy via Whatsapp</a>
                                        </div>
                                        <a href="#" class="buy-btn d-block d-sm-inline-block text-center text-sm-left">Buy Now</a>
                                    </div>
                                </form>
                                <PictureColorChanger image={product.pictures[0]} />
                            </div>

                        </div>
                    </div>


                </div>
            </div >
            <Footer />
        </>
    )
}
// export async function getStaticPaths() {

//     const data = await fetch('http://localhost:4000/product')
//         .then(response => response.json())
//     const paths = data.map((product) => ({ params: { productId: product._id } }))
//     return {
//         paths,
//         fallback: false,
//     };
// }
export async function getServerSideProps({ params }) {
    const pro = await fetch(`https://kabstore-7p9q.onrender.com/product/${params.productId}`)
        .then(response => response.json())
    const product = pro.product
    const session = await getSession()
    let carts
    if (session) {
        carts = await fetch(`https://kabstore-7p9q.onrender.com/user/${session.id}/cart`)
            .then(response => response.json())
    }
    else {
        carts = []
    }

    return {
        props: {
            product,
            carts
        },
    };
}