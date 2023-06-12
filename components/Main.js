import React from 'react';

import { useState, useMemo, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Image from "next/image";
import Product from './Product'
import Footer from './Footer'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { reactStrictMode } from 'next.config';
import Link from 'next/link';
import { set } from 'nprogress';
function valuetext(value) {
    return `RWF${value}`;
}
export default function Main({ products }) {
    console.log(products.length);
    const [sort, setSort] = useState('off');
    const [page, setPage] = useState(1)
    const pageSize = 3
    const [start, setStart] = useState(1)
    const [displayProducts, setDisplayProducts] = useState([])

    const [end, setEnd] = useState(pageSize)
    const [price, setPrice] = useState(false)
    let pageCount = Math.ceil(products.length / pageSize)
    useEffect(() => {
        pageCount = Math.ceil(products.length / pageSize)
    }, [products])
    console.log(pageCount);
    useEffect(() => {
        const firstPageIndex = (page - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        if (lastPageIndex < products.length) {
            setStart(firstPageIndex + 1)
            setEnd(lastPageIndex)
            console.log("was here", lastPageIndex);
        }
        else {
            setStart(firstPageIndex + 1)
            setEnd(firstPageIndex + 1)
            console.log("was last bbbrr", firstPageIndex + 1);
        }
        return setDisplayProducts(products.slice(firstPageIndex, lastPageIndex));

    }, [page])
    console.log('cp', displayProducts);
    const handlePagination = (event, page1) => {
        setPage(page1)
    }

    const handleChange = (SelectChangeEvent) => {
        setSort(SelectChangeEvent.target.value);
    };
    const [value, setValue] = useState([0, 100000000000000]);

    const handleChange1 = (event, newValue) => {
        setValue(newValue);
        setPrice(true)
    };
    const filteredProducts = products.filter((product) => {
        return product.price >= value[0] && product.price <= value[1]
    })
    return (<>
        <main>
            {/* <div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div class="logo-loader"><Image src={LogoB} width={200}></Image></div>
                     <div class="object" id="first_object"></div>
                    <div class="object" id="second_object"></div>
                    <div class="object" id="third_object"></div>
                </div>
            </div>
        </div> */}
            <div class="shop-product-area pb-40">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-3 col-lg-4">
                            <div class="epix-sidebar-area">
                                <div class="epix-sidebar-widget mb-40">
                                    <h4 class="epix-s-widget-title">SHOP BY CATEGORIES</h4>
                                    <div class="epix-taglist">
                                        <ul>
                                            <li><Link href={`/category/${encodeURIComponent("accessories")}`}>Accessories</Link></li>
                                            <li><Link href={`/category/${encodeURIComponent("cameras")}`}>Cameras</Link></li>
                                            <li><Link href={`/category/${encodeURIComponent("computers")}`}>Computers</Link></li>
                                            <li><Link href={`/category/${encodeURIComponent("tablet")}`}>Tablet</Link></li>
                                            <li><Link href={`/category/${encodeURIComponent("games")}`}>Games</Link></li>
                                            <li><Link href={`/category/${encodeURIComponent("smartPhones")}`}>SmartPhones</Link></li>
                                            <li><Link href={`/category/${encodeURIComponent("television")}`}>Television</Link></li>
                                            <li><Link href={`/category/${encodeURIComponent("uncategorized")}`}>Uncategorized</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="epix-sidebar-widget">
                                    <h4 class="epix-s-widget-title">PRICE</h4>
                                    <div class="slider-range mb-40">
                                        <Slider
                                            getAriaLabel={() => 'Price range'}
                                            value={value}
                                            max={1000000}
                                            onChange={handleChange1}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                            sx={{
                                                width: 300,
                                                color: 'black',
                                            }}
                                        />
                                        <p>
                                            <label for="amount">Price :</label>
                                            <label for="amount"> {`RWF${value[0]}-RWF${value[1]}`}</label>
                                        </p>
                                    </div>
                                </div>
                                <div class="epix-sidebar-widget mb-40">
                                    <h4 class="epix-s-widget-title">TAGS</h4>
                                    <div class="tagcloud">
                                        <a href="shop">Ryzen</a>
                                        <a href="shop">Xeon</a>
                                        <a href="shop">Athlon</a>
                                        <a href="shop">Core i5</a>
                                        <a href="shop">Core i7</a>
                                        <a href="shop">Core i9</a>
                                        <a href="shop">Celeron</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-9 col-lg-8 epix-shop-order">
                            <div class="epix-shop-products-display">
                                <div class="epix-shop-product-topbar">
                                    <div class="epix-content-header mb-55">
                                        <div class="epix-ch-left">
                                            <nav>
                                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <button class="active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#grid-view" type="button"><i class="fas fa-th"></i></button>
                                                    <button class="" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#list-view" type="button"><i class="fas fa-list-ul"></i></button>
                                                </div>
                                            </nav>
                                        </div>
                                        <div class="epix-ch-right">
                                            <div class="show-text">
                                                <span>{`Showing ${start}–${end} of ${products.length} results`}</span>
                                            </div>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={sort}
                                                    label="Sort"
                                                    defaultValue={"AVAILABLE"}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={"AVAILABLE"}>AVAILABLE</MenuItem>
                                                    <MenuItem value={"UNAVAILABLE"}>UNAVAILABLE</MenuItem>
                                                    <MenuItem value={"COMING SOON"}>COMING SOON</MenuItem>
                                                    <MenuItem value={"OUT OF STOCK"}>OUT OF STOCK</MenuItem>
                                                </Select>
                                            </FormControl>

                                        </div>
                                    </div>
                                    <div class="epix-shop-product-main">
                                        <div class="tab-content" id="nav-tabContent">
                                            <div class="tab-pane fade show active" id="grid-view">
                                                <div class="row gap-4">
                                                    {
                                                        displayProducts.map((product, index) => {
                                                            if (sort == product.status && value[0] <= product.price && product.price <= value[1]) {
                                                                return <Product product={product} />

                                                            }


                                                        })

                                                    }

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-xxl-end">
                        <div class="col-xxl-9">
                            <Pagination count={pageCount} variant="outlined" onChange={handlePagination} shape="rounded" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>


    </>)
}