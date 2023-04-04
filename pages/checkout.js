import Footer from "components/Footer"
import Header1 from "components/Header1"
import { useEffect, useState } from "react"
export default function CheckOut({ carts }) {
    const [total, setTotal] = useState(0)
    const [selectedValue, setSelectedValue] = useState(0);
    useEffect(() => {
        setTotal(carts.reduce((acc, curr) => acc + curr.price, 0))
    }, [carts])
    const handleOptionChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <>
            <Header1 carts={carts} />
            <main>

                {/* <div id="loading">
                    <div id="loading-center">
                        <div id="loading-center-absolute">
                            <div class="object" id="first_object"></div>
                            <div class="object" id="second_object"></div>
                            <div class="object" id="third_object"></div>
                        </div>
                    </div>
                </div> */}
                <section class="coupon-area coupon-space pt-100 pb-30">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="coupon-accordion">
                                    <h3>Returning customer? <span id="showlogin">Click here to login</span></h3>
                                    <div id="checkout-login" class="coupon-content">
                                        <div class="coupon-info">
                                            <p class="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est
                                                sit amet ipsum luctus.</p>
                                            <form action="#">
                                                <p class="form-row-first">
                                                    <label>Username or email <span class="required">*</span></label>
                                                    <input type="text" />
                                                </p>
                                                <p class="form-row-last">
                                                    <label>Password <span class="required">*</span></label>
                                                    <input type="text" />
                                                </p>
                                                <p class="form-row">
                                                    <button class="os-btn os-btn-black" type="submit">Login</button>
                                                    <label>
                                                        <input type="checkbox" />
                                                        Remember me
                                                    </label>
                                                </p>
                                                <p class="lost-password">
                                                    <a href="register.html">Lost your password?</a>
                                                </p>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="coupon-accordion">

                                    <h3>Have a coupon? <span id="showcoupon">Click here to enter your code</span></h3>
                                    <div id="checkout_coupon" class="coupon-checkout-content">
                                        <div class="coupon-info">
                                            <form action="#">
                                                <p class="checkout-coupon">
                                                    <input type="text" placeholder="Coupon Code" />
                                                    <button class="os-btn os-btn-black" type="submit">Apply Coupon</button>
                                                </p>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="checkout-area pb-70">
                    <div class="container">
                        <form action="#">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkbox-form">
                                        <h3>Billing Details</h3>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="country-select">
                                                    <label>Country <span class="required">*</span></label>
                                                    <select>
                                                        <option value="volvo">bangladesh</option>
                                                        <option value="saab">Algeria</option>
                                                        <option value="mercedes">Afghanistan</option>
                                                        <option value="audi">Ghana</option>
                                                        <option value="audi2">Albania</option>
                                                        <option value="audi3">Bahrain</option>
                                                        <option value="audi4">Colombia</option>
                                                        <option value="audi5">Dominican Republic</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="checkout-form-list">
                                                    <label>First Name <span class="required">*</span></label>
                                                    <input type="text" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="checkout-form-list">
                                                    <label>Last Name <span class="required">*</span></label>
                                                    <input type="text" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>Company Name</label>
                                                    <input type="text" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>Address <span class="required">*</span></label>
                                                    <input type="text" placeholder="Street address" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>Town / City <span class="required">*</span></label>
                                                    <input type="text" placeholder="Town / City" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="checkout-form-list">
                                                    <label>State / County <span class="required">*</span></label>
                                                    <input type="text" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="checkout-form-list">
                                                    <label>Postcode / Zip <span class="required">*</span></label>
                                                    <input type="text" placeholder="Postcode / Zip" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="checkout-form-list">
                                                    <label>Email Address <span class="required">*</span></label>
                                                    <input type="email" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="checkout-form-list">
                                                    <label>Phone <span class="required">*</span></label>
                                                    <input type="text" placeholder="Postcode / Zip" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list create-acc">
                                                    <input id="cbox" type="checkbox" />
                                                    <label for="cbox">Create an account?</label>
                                                </div>
                                                <div id="cbox_info" class="checkout-form-list create-account">
                                                    <p>Create an account by entering the information below. If you are a returning
                                                        customer please login at the top of the page.</p>
                                                    <label>Account password <span class="required">*</span></label>
                                                    <input type="password" placeholder="password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="different-address">
                                            <div class="ship-different-title">
                                                <h3>
                                                    <label>Ship to a different address?</label>
                                                    <input id="ship-box" type="checkbox" />
                                                </h3>
                                            </div>
                                            <div id="ship-box-info">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="country-select">
                                                            <label>Country <span class="required">*</span></label>
                                                            <select>
                                                                <option value="volvo">bangladesh</option>
                                                                <option value="saab">Algeria</option>
                                                                <option value="mercedes">Afghanistan</option>
                                                                <option value="audi">Ghana</option>
                                                                <option value="audi2">Albania</option>
                                                                <option value="audi3">Bahrain</option>
                                                                <option value="audi4">Colombia</option>
                                                                <option value="audi5">Dominican Republic</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="checkout-form-list">
                                                            <label>First Name <span class="required">*</span></label>
                                                            <input type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="checkout-form-list">
                                                            <label>Last Name <span class="required">*</span></label>
                                                            <input type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="checkout-form-list">
                                                            <label>Company Name</label>
                                                            <input type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="checkout-form-list">
                                                            <label>Address <span class="required">*</span></label>
                                                            <input type="text" placeholder="Street address" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="checkout-form-list">
                                                            <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="checkout-form-list">
                                                            <label>Town / City <span class="required">*</span></label>
                                                            <input type="text" placeholder="Town / City" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="checkout-form-list">
                                                            <label>State / County <span class="required">*</span></label>
                                                            <input type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="checkout-form-list">
                                                            <label>Postcode / Zip <span class="required">*</span></label>
                                                            <input type="text" placeholder="Postcode / Zip" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="checkout-form-list">
                                                            <label>Email Address <span class="required">*</span></label>
                                                            <input type="email" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="checkout-form-list">
                                                            <label>Phone <span class="required">*</span></label>
                                                            <input type="text" placeholder="Postcode / Zip" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="order-notes">
                                                <div class="checkout-form-list">
                                                    <label>Order Notes</label>
                                                    <textarea id="checkout-mess" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="your-order mb-30 ">
                                        <h3>Your order</h3>
                                        <div class="your-order-table table-responsive">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th class="product-name">Product</th>
                                                        <th class="product-total">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        carts.map((item, index) => {
                                                            return (
                                                                <tr class="cart_item">
                                                                    <td class="product-name">
                                                                        {item.name} <strong class="product-quantity"> × {item.quantity}</strong>
                                                                    </td>
                                                                    <td class="product-total">
                                                                        <span class="amount">${item.price}</span>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }


                                                </tbody>
                                                <tfoot>
                                                    <tr class="cart-subtotal">
                                                        <th>Cart Subtotal</th>
                                                        <td><span class="amount">${total}</span></td>
                                                    </tr>
                                                    <tr class="shipping">
                                                        <th>Shipping</th>
                                                        <td>
                                                            <ul>
                                                                <li>
                                                                    <input id="amount" type="radio" name="checkout" value={7} onChange={handleOptionChange} />
                                                                    <label for="amount">
                                                                        Flat Rate: <span class="amount">$7.00</span>
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <input id="shipping" type="radio" name="checkout" value={0} onChange={handleOptionChange} />
                                                                    <label for="shipping">Free Shipping:</label>
                                                                </li>
                                                                <li></li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr class="order-total">
                                                        <th>Order Total</th>
                                                        <td><strong><span class="amount">${total + selectedValue}</span></strong>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>

                                        <div class="payment-method">
                                            <div class="accordion" id="accordionExample">
                                                <div class="card accordion-item">
                                                    <div class="card-header" id="headingOne">
                                                        <h5 class="mb-0 accordion-header">
                                                            <button class="btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                                                                Direct Bank Transfer
                                                            </button>
                                                        </h5>
                                                    </div>

                                                    <div id="collapseOne" class="collapse accordion-collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            Make your payment directly into our bank account. Please use your Order ID
                                                            as the payment
                                                            reference. Your order won’t be
                                                            shipped until the funds have cleared in our account.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card accordion-item">
                                                    <div class="card-header" id="headingTwo">
                                                        <h5 class="mb-0 accordion-header">
                                                            <button class="btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false">
                                                                Cheque Payment
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwo" class="collapse accordion-collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            Please send your cheque to Store Name, Store Street, Store Town, Store
                                                            State / County, Store
                                                            Postcode.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card accordion-item">
                                                    <div class="card-header" id="headingThree">
                                                        <h5 class="mb-0 accordion-header">
                                                            <button class="btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false">
                                                                PayPal
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseThree" class="collapse accordion-collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            Pay via PayPal; you can pay with your credit card if you don’t have a
                                                            PayPal account.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="order-button-payment mt-20">
                                                <button type="submit" class="os-btn os-btn-black">Place order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    const carts = await fetch(`http://localhost:4000/user/${session.id}/cart`)
        .then(response => response.json())
    return {
        props: {
            carts: carts
        }
    }
}