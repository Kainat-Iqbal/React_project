import AboutUs from '../AboutUs';
import Deals from '../Deals';
import Footer from '../Footer';
import ProductCards from '../Utilities/ProductCard';
import Tshirts from '../Utilities/Tshirts';
import './style.css';
/* import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material'; */
import React, { useState } from "react";

function OurProducts() {
    const [product, setProduct] = useState([
        {
            image: require('./coat.jpg'),
            name: "Long Coats",
            description: "New customers can download this image",
            
        },
        {
            image: require('./hoodies.jpg'),
            name: "Hoodies",
            description: "New customers can download this image",
        },
        {
            image: require('./t-shirt.avif'),
            name: "T-Shirts",
            description: "New customers can download this image",
        },
        {
            image: require('./bellBottom.jpg'),
            name: "Bell-Bottoms",
            description: "New customers can download this image",
        },
        {
            image: require('./jacket.jpg'),
            name: "Fancy Jackets",
            description: "New customers can download this image",
        },
        {
            image: require('./kurti.jpg'),
            name: "Stylish Kurti",
            description: "New customers can download this image",
        },
        {
            image: require('./baloon-top.jpg'),
            name: "Baloon-Tops",
            description: "New customers can download this image",
        },
        {
            image: require('./formal-shirt.jpg'),
            name: "Formal-Shirts",
            description: "New customers can download this image",
        }
    ])


    return (
        <div id="mainDivProduct">
            <div id="topDivProduct">
                <div id="topDivTop">
                    <h1>Our Products</h1>
                </div>
                <div id="topDivBottom">
                    <div id="links">
                        <a href="#">HOT</a>
                        <a href="#">ON SALE</a>
                        <a href="#">TRENDING NOW</a>
                        <a href="#">NEW ARRIVAL</a>
                    </div>
                </div>
            </div>
            <div id="bottomDiv">
                <div id="mainProductDiv">
                    {
                        product.map((Product) => {
                            return (
                                <a href='#'>
                                    <ProductCards
                                        image={Product.image}
                                        text={Product.name}
                                    />
                                </a>
                            );
                        })
                    }
                </div>
            </div>
            <Deals />
            <AboutUs />
            <Footer />
        </div>
    )
}
export default OurProducts;