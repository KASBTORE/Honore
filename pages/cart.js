import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header1 from "components/Header1";
import Footer from "components/Footer";
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Loader from "components/Loader";
import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";
import Empty from "../img/empty_cart.png"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';
export default function Cart({ products, user }) {
    const { data: session, status } = useSession({ required: true })
    const [total, setTotal] = useState(0)
    const [progress, setProgress] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data1, setData] = useState(products)
    const [empty, setEmpty] = useState(false)
    const router = useRouter();
    if (!user) {
        router.push('/loading');
        return null;
    }
    console.log(status === "authenticated");
    console.log(user);
    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#000',
                darker: '#053e85',
            },
            neutral: {
                main: '#fff',
                contrastText: '#fff',
            },
        },
    });
    const refreshData = () => {
        router.replace(router.asPath);
    };

    useEffect(() => {
        setData(products)
        console.log(data1);
        let t = data1.map((p, i) => {
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
        if (data1.length === 0) {
            setEmpty(true)
        }
        else {
            setEmpty(false)
        }
        console.log(total1);
        setTotal(total1)

    }, [data1, products])
    // useEffect(() => {
    //     router.push(router.pathname, undefined, { shallow: true });
    // }, []);
    // Create a state object to keep track of the quantity of each product
    const [productQuantity, setProductQuantity] = useState(
        data1.reduce((acc, product) => {
            console.log("before", product);
            acc[product._id] = product.quantity;
            console.log(acc[product._id]);
            return acc;
        }, {})
    );

    const getProductQuantity = (productId) => {
        return productQuantity[productId];
    };
    const minus = (productId) => {
        setProductQuantity({
            ...productQuantity,
            [productId]: getProductQuantity(productId) - 1
        });

    };

    const plus = (productId, price) => {
        setProductQuantity({
            ...productQuantity,
            [productId]: getProductQuantity(productId) + 1
        });
        setTotal(total + price);
    };

    const cartDelete = async (productId, refreshData) => {
        setProgress(true)
        const res = await fetch(`https://kabstoreonlineshop.com/user/${session.id}/cart/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log(data);

        if (data) {

            refreshData();
            setProgress(false)

        }
    };



    const renderProducts = () => {
        return data1.map((product, index) => {
            return (
                <tr key={index}>
                    <td className="product-thumbnail">
                        <Link href={`https://kabstoreonlineshop.com/product/${product.id}`}>
                            <Image src={product.picture} width={125} height={125} />
                        </Link>
                    </td>
                    <td className="product-name">
                        <Link href={`https://kabstoreonlineshop.com/product/${product.id}`}>
                            {product.name}
                        </Link>
                    </td>
                    <td className="product-price">
                        <span className="amount">{product.price}</span>
                    </td>
                    <td>
                        <div className="d-inline-block border-gray">
                            <div className="epix-quantity-form">
                                <button
                                    className="minus"
                                    onClick={() => minus(product._id)}
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={getProductQuantity(product._id)}
                                />
                                <button
                                    className="plus"
                                    onClick={() => plus(product._id, product.price)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </td>
                    <td className="product-subtotal">
                        <span className="amount">{product.price * getProductQuantity(product._id)}</span>
                    </td>
                    <td className="product-remove">
                        <button onClick={() => cartDelete(product._id, refreshData)}>
                            {progress && <ThemeProvider theme={theme}> <CircularProgress className='mt-[10px]' color='primary' size={20} /></ThemeProvider>}
                            {!progress && <FontAwesomeIcon icon={faXmark} />}
                        </button>
                    </td>
                </tr>
            );
        });
    };
    useEffect(() => {
        let ids = Object.keys(productQuantity);
        ids.map((id) => {
            console.log(id);
            console.log("The id of the cart product", productQuantity[id]);
            fetch(`https://kabstore-7p9q.onrender.com/cart/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    quantity: productQuantity[id]
                })
            }).then(res => res.json())
                .then(data => {
                    console.log("while product quantity changes this was done     ", data.data);
                })
        }
        )
        console.log("changed quantity");

    }, [productQuantity])
    console.log("This is the quantity of the product", productQuantity);
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
                            <div class="table-content table-responsive flex justify-center">
                                {empty && <div className="w-[30%] h-[30%] align-middle"><Image src={Empty} />
                                    <h1 className="text-center text-2xl">Your Cart is Empty</h1>


                                </div>}
                                {!empty && <table class="table">
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
                                            renderProducts()


                                        }


                                    </tbody>
                                </table>}
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
                                            <li>Subtotal <span>$0.00</span></li>
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

export async function getServerSideProps(context) {
    const session = await getSession(context)
    console.log("The session is", session);

    if (!session || !session.user) {
        return {
            redirect: {
                destination: '/login'
            },
        }
    }
    else {
        const products = await fetch(`https://kabstore-7p9q.onrender.com/user/${session.id}/cart`)
            .then(response => response.json())
        return {
            props: {
                products: products,
                user: session

            }
        }
    }

}



