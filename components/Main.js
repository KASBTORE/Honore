import React from 'react';
import { useState, useMemo } from 'react';
import Pagination from '@mui/material/Pagination';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Image from "next/image";
import Product from './Product'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { reactStrictMode } from 'next.config';
export default function Main({ products }) {
    const [sort, setSort] = useState('');
    const [page, setPage] = useState(1)
    const pageSize = 3
    const displayProducts = useMemo(() => {
        const firstPageIndex = (page - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    }, [page])
    const handlePagination = (event, page1) => {
        setPage(page1)
    }

    const handleChange = (SelectChangeEvent) => {
        setSort(SelectChangeEvent.target.value);
    };
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
                                            <li><a href="shop">Accessories</a></li>
                                            <li><a href="shop">Cameras</a></li>
                                            <li><a href="shop">Computer & Laptop</a></li>
                                            <li><a href="shop">Tablet</a></li>
                                            <li><a href="shop">Games & Accessories</a></li>
                                            <li><a href="shop">Smartphone</a></li>
                                            <li><a href="shop">Television</a></li>
                                            <li><a href="shop">Uncategorized</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="epix-sidebar-widget">
                                    <h4 class="epix-s-widget-title">PRICE</h4>
                                    <div class="slider-range mb-40">
                                        <div id="slider-range"></div>
                                        <p>
                                            <label for="amount">Price :</label>
                                            <input type="text" id="amount" readonly />
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
                                                <span>Showing 1–12 of 20 results</span>
                                            </div>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={sort}
                                                    label="Sort"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={"Computers"}>Computers</MenuItem>
                                                    <MenuItem value={"Phones"}>Phones</MenuItem>
                                                    <MenuItem value={"Watches"}>Phones</MenuItem>
                                                </Select>
                                            </FormControl>

                                        </div>
                                    </div>
                                    <div class="epix-shop-product-main">
                                        <div class="tab-content" id="nav-tabContent">
                                            <div class="tab-pane fade show active" id="grid-view">
                                                <div class="row">
                                                    {
                                                        displayProducts.map((product, index) => {
                                                            if (sort == product.category) {
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
                            <Pagination count={10} variant="outlined" onChange={handlePagination} shape="rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </main>


    </>)
}