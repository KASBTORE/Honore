import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Image from "next/image";
import ProductImg from '../img/product.jpeg';
export default function Product({ product }) {
    const onClick = async () => {
        try {
            const api = await fetch('http://localhost:4000/cart', {
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
            console.log(data);
        }
        catch (err) {
            console.log(err)
        }

    }
    return (
        <>
            <div class="col-xxl-3 col-sm-6 col-md-4">
                <div class="epix-single-product-3 mb-40 style-2 text-center swiper-slide">
                    <div class="epix-product-thumb-3">
                        <div class="epix-action">
                            <Link href={`/product/${encodeURIComponent(product._id)}`} legacyBehavior>
                                <a class="p-cart product-popup-toggle">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </Link>
                            <a class="p-cart product-popup-toggle">
                                <button onClick={onClick}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </button>
                            </a>
                        </div>
                        <span class="sale">sale</span>
                        <Link href={`/product/${encodeURIComponent(product._id)}`} legacyBehavior>
                            <Image src={ProductImg} width={250} height={100} />
                        </Link>
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