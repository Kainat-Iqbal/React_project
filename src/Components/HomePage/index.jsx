import './style.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Collection from '../Collection';
import OurProducts from '../OurProducts';


function HomePage() {
    return (
        <div id="mainDivHome">
            <div id="top">
                <div id="lefttop">
                    <h2>FIFASH</h2>
                </div>
                <div id="centertop">
                    <a href="#">MEN</a>
                    <a href="#">WOMEN</a>
                    <a href="#">KIDS</a>
                    <a href="#">COLLECTION</a>
                    <a href="#">TRENDS</a>
                </div>
                <div id="righttop">
                    <IconButton color="primary" aria-label="add to shopping cart" style={{ color: "rgb(3, 51, 3)", padding: "20px", fontWeight: "500" }}>
                        <AddShoppingCartIcon />
                    </IconButton>
                    <Button variant="outlined" style={{ color: "rgb(3, 51, 3)", borderColor: "rgb(3, 51, 3)", fontWeight: "700", fontSize: "15spx" }}>Log in</Button>

                </div>
            </div>
            <div id="bottom">
                <div id="leftbottom">
                    <div id="textdiv">
                        <h1>Find The Best Fashion Style For You</h1>
                        <p>Discover the latest trends and timeless classics that let you express yourself through fashion.</p>
                        <Button variant="contained" id='b1' style={{ backgroundColor: "darkgreen", fontSize: "16px" }}>Shop Now</Button></div>
                </div>
                <div id="rightbottom">
                    <img src={require('./fashion.jpg')} />
                </div>
            </div>
            <Collection/>
        </div>
    )
}
export default HomePage;