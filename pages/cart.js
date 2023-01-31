import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header1 from "components/Header1";
import Footer from "components/Footer";
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Loader from "components/Loader";
import { useRouter } from "next/router";
export default function Cart({ products }) {
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(products)
    const router = useRouter()
    const refreshData = () => router.replace(router.asPath)
    useEffect(() => {
        setData(products)
        console.log(data);
        let t = data.map((p, i) => {
            console.log(total)
            console.log(i);
            return p.price;
        })
        let total1 = 0
        console.log(t);
        for (let i = 0; i < t.length; i++) {
            total1 = total1 + t[i]
            console.log(total1);

        }
        console.log(total1);
        setTotal(total1)

    }, [data, products])
    // useEffect(() => {
    //     router.push(router.pathname, undefined, { shallow: true });
    // }, []);


    return (
        <>
            {loading && <Loader />}

            <main>
                {/* 
                <div id="loading">
                    <div id="loading-center">
                        <div id="loading-center-absolute">
                            <div class="object" id="first_object"></div>
                            <div class="object" id="second_object"></div>
                            <div class="object" id="third_object"></div>
                        </div>
                    </div>
                </div> */}

                <Header1 carts={products} />
                <div class="cart-area pb-100">
                    <div class="container">
                        <div class="cart-box">
                            <div class="table-content table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="product-thumbnail">Images</th>
                                            <th class="cart-product-name">Product</th>
                                            <th class="product-price">Unit Price</th>
                                            <th class="product-quantity">Quantity</th>
                                            <th class="product-subtotal">Total</th>
                                            <th class="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((product, index) => {
                                                const [quantity, setQuantity] = useState(1)
                                                const minus = () => {
                                                    if (quantity > 1) {
                                                        setQuantity(quantity - 1)
                                                    }

                                                }
                                                const plus = () => {
                                                    setQuantity(quantity + 1)
                                                    setTotal(total + product.price)

                                                }
                                                const cartDelete = async () => {
                                                    // setLoading(true)
                                                    const res = await fetch(`https://kabstore-7p9q.onrender.com/cart/${product._id}`, {
                                                        method: 'DELETE',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        }
                                                    });
                                                    const data = await res.json();
                                                    console.log(data);

                                                    // if (data) {
                                                    //     router.reload()
                                                    // }
                                                }

                                                return (
                                                    <>
                                                        <tr>
                                                            <td class="product-thumbnail">
                                                                <Link href={`http://localhost:3000/product/${product.id}`}>
                                                                    <Image src={product.picture} width={125} height={125} />

                                                                </Link></td>
                                                            <td class="product-name"><Link href={`http://localhost:3000/product/${product.id}`}>{product.name} </Link></td>
                                                            <td class="product-price"><span class="amount">{product.price}</span></td>
                                                            <td>
                                                                <div class="d-inline-block border-gray">
                                                                    <div class="epix-quantity-form">
                                                                        <button class="minus" onClick={minus}>-</button>
                                                                        <input type="text" value={quantity} />
                                                                        <button class="plus" onClick={plus}>+</button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="product-subtotal"><span class="amount">{product.price * quantity}</span></td>
                                                            <td class="product-remove"><a><button onClick={cartDelete}><FontAwesomeIcon icon={faXmark} /></button></a></td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="coupon-all">
                                        <div class="coupon">
                                            <input id="coupon_code" class="input-text" name="coupon_code" value="" placeholder="Coupon code"
                                                type="text" />
                                            <button class="os-btn os-btn-black" name="apply_coupon" type="submit">Apply
                                                coupon</button>
                                        </div>
                                        <div class="coupon2">
                                            <button class="os-btn os-btn-black" name="update_cart" type="submit">Update cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5 ms-auto">
                                    <div class="cart-page-total">
                                        <h2>Cart totals</h2>
                                        <ul class="mb-20">
                                            <li>Subtotal <span>$250.00</span></li>
                                            <li>Total <span>{total}</span></li>
                                        </ul>
                                        <a class="os-btn" href="checkout.html">Proceed to checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />

        </>
    )
}

export async function getServerSideProps() {
    const products = await fetch('https://kabstore-7p9q.onrender.com/cart')
        .then(response => response.json())
    return {
        props: {
            products: products
        }
    }
}



