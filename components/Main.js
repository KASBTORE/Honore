import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import LogoB from '../img/logo/logo-design.PNG'
import Image from "next/image";
import Product from './Product'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
export default function Main({products}) {
    const [age, setAge] = React.useState('');

    const handleChange = (SelectChangeEvent) => {
      setAge(SelectChangeEvent.target.value);
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
                                        <input type="text" id="amount" readonly/>
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
                                        <div class="sort-wrapper">
                                            <select name="select" id="select">
                                                <option value="1">Sort By New</option>
                                                <option value="2">Sort By New</option>
                                                <option value="3">Sort By New</option>
                                            </select>
                                        </div>
                                        < div sx={{
                                            display:"block"

                                        }}>
                                                                                    <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
                                        </ div>

                                    </div>
                                </div>
                                <div class="epix-shop-product-main">
                                    <div class="tab-content" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="grid-view">
                                            <div class="row">
                                                {
                                                    products.map((product,index)=>(
                                                        <Product product={product}/>
                                                    ))
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
                        <div class="epix-pagination pagination-area mt-40 mb-70">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center justify-xl-content-left">
                                    <li class="page-item disabled">
                                        <a class="page-link prev" href="shop" tabindex="-1"><i class="fal fa-angle-left"></i> Prev</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="shop">1</a></li>
                                    <li class="page-item"><a class="page-link" href="shop">2</a></li>
                                    <li class="page-item"><a class="page-link" href="shop">3</a></li>
                                    <li class="page-item"><a class="page-link" href="shop">4</a></li>
                                    <li class="page-item">
                                        <a class="page-link next" href="shop">Next <i class="fal fa-angle-right"></i></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    
    
    </>)
}