import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Image from "next/image";
import ProductImg from '../img/product.jpeg';
export default function Product({ product }) {
    return (
        <>
            <div class="col-xxl-3 col-sm-6 col-md-4">
                <div class="epix-single-product-3 mb-40 style-2 text-center swiper-slide">
                    <div class="epix-product-thumb-3">
                        <div class="epix-action">
                            <Link href={`/product/${encodeURIComponent(product._id)}`} legacyBehavior>
                                <a href="#" class="p-cart product-popup-toggle">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </Link>
                            <a href={`https://wa.me/250788458897?text=Hello, i'm interested to buy this product, http://kabstore.devslab.io/product?details=${product._id}`} class="p-cart">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                        </div>
                        <span class="sale">sale</span>
                        <a href="product"><Image src={ProductImg} width={250} height={100} /></a>

                    </div>
                    <div class="price-box price-box-3">
                        <span class="price">RWF {product.price}</span>

                    </div>
                    <h5 class="epix-p-title epix-p-title-3"><a href="product">{product.name}</a></h5>
                </div>
            </div>
        </>
    )
}