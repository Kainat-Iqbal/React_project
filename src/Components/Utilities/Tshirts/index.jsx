import Footer from "../../Footer";
import SubCategories from "../SubCategories";
import React, { useState } from "react";

function Tshirts() {

    const [product, setProduct] = useState([
        {
            image: require('./img1.jpg'),
            price: "Rs.2000",
            val: 4,
        },
        {
            image: require('./img2.jpg'),
            price: "Rs.2000",
            val: 5,
        },
        {
            image: require('./t-shirt.avif'),
            price: "Rs.2000",
            val: 1,
        },
        {
            image: require('./img3.jpg'),
            price: "Rs.2000",
            val: 3,
        },
        {
            image: require('./img4.jpg'),
            price: "Rs.2000",
            val: 2,
        },
        {
            image: require('./img5.jpg'),
            price: "Rs.2000",
            val: 2,
        },
        {
            image: require('./img6.jpg'),
            price: "Rs.2000",
            val: 4.3,
        },
        {
            image: require('./img7.jpg'),
            price: "Rs.2000",
            val: 5,
        }
    ])


    return (
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            rowGap:"3vh",
            columnGap:"2vw"}}>
            {
                product.map((Product) => {
                    return (
                        <a href='#' style={{borderBottom:"none"}}>
                            <SubCategories
                                image={Product.image}
                                price={Product.price}
                                val = {Product.val}
                            />
                        </a>
                    );
                })
            }
            <Footer/>
        </div>
    )
}
export default Tshirts;