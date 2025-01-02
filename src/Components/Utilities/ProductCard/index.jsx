import React from 'react';
function ProductCards({image,text}){
    return(
<div id="productCard">
                            <div id="productImg">
                                <img src={image} />
                            </div>
                            <div id="productText">
                                <p>{text}</p>
                            </div>
                        </div>
    )
}

export default ProductCards;