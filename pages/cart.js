import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
export default function Cart({ products }) {
    const [quantity, setQuantity] = useState(1)
    const minus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }

    }
    const plus = () => {
        setQuantity(quantity + 1)

    }
    return (
        <>
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
                            products.map((product, index) => {
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
                                            <td class="product-subtotal"><span class="amount">$130.00</span></td>
                                            <td class="product-remove"><a href="#"><i class="fa fa-times"></i></a></td>
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
                            <li>Total <span>$250.00</span></li>
                        </ul>
                        <a class="os-btn" href="checkout.html">Proceed to checkout</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const products = await fetch('http://localhost:4000/cart')
        .then(response => response.json())

    return {
        props: {
            products
        }
    }
}