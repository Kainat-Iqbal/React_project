import Footer from '../Footer';
import './style.css';
import React from 'react';

function Deals(){
    return(
        <div id="mainDealsDiv">
            <div id="mainDiv">
                <div id="leftDiv">
                    <div id="leftTop">
                        <h1>Deals Of The Day</h1>
                        <h4>Most trusted online clothing store in Pakistan. · New Arrival ·
                             The most loved and most appreciated outfit, Shop now at DealsoftheDay.pk Free Delivery ·</h4>
                    </div>
                    <div id="leftMid">
                        <div id="box">
                            <h1>08</h1>
                            <h3>Days</h3>
                        </div>
                        <div id="box">
                            <h1>08</h1>
                            <h3>Days</h3>
                        </div>
                        <div id="box">
                            <h1>08</h1>
                            <h3>Days</h3>
                        </div>
                    </div>
                    <div id="leftBottom">
                        <button> Shop Now</button>
                    </div>
                </div>
                <div id="rightDiv">
                    <img src={require('./img1.jpg')}/>
                </div>
            </div>
        </div>
    )
}

export default Deals;