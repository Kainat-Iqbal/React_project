import './subCatStyle.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function SubCategories({ image, price, val }) {
    return (
        <div id="mainSubCatDiv">
            <div id="subCatCard">
                <div id="image">
                    <img src={image}/>
                </div>
                <div id="price">
                    <h3>{price}</h3>
                </div>
                <div id="rating">
                    <Box>
                        <Rating name="read-only" value={val} readOnly />
                    </Box>
                </div>
                <div id="buttons">
                    <button>Add to Cart</button>
                    <button>Add to WishList</button>
                </div>
            </div>
        </div>
    )
}
export default SubCategories;