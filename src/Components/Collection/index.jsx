import OurProducts from '../OurProducts';
import './coll_style.css'

function Collection(){
    return(
        <div id="mainColl">
            <div id="topd">
               <h1>New Collection</h1>
                <p>Discover the latest trends and timeless classics that let you express yourself through fashion.</p>
             </div>
            <div id="bottomd">
                <div id="bottomcoll">
                    <div id="imgcontainer">
                        <img src={require('./sweater.jpg')} alt='sweatre'/>
                            <button>Sweater</button>
                    </div>
                    <div id="imgcontainer">
                        <img src={require('./Tshirt.jpg')} alt='sweatre'/>
                            <button>T-Shirt</button>
                    </div>
                    <div id="imgcontainer">
                        <img src={require('./longsleeve.webp')} alt='sweatre'/>
                            <button>Long Sleeve</button>
                    </div>
                </div>
                
            </div>
            <div id="bottom2">
                    <div id="leftbot">
                   <img src={require('./fash.jpg')}
/>                    </div>
                    <div id="rightbot">
                        <div id="txtdiv">
                        <h1>
                            Best Fashion Since 2019.
                        </h1>
                        <p>
                        Discover the latest trends and timeless classics that let you express yourself through fashion.Discover the latest trends and timeless classics that let you express yourself through fashion.
                        </p>
                        </div>
                        <div id="rev">
                            <div id="revdiv">
                                <h2>2019</h2>
                                <h6>FIFASH Founded</h6>
                            </div>
                            <div id="revdiv">
                                <h2>9200+</h2>
                                <h6>Products Sold</h6>
                            </div>
                            <div id="revdiv">
                                <h2>3105+</h2>
                                <h6>Best Reviews</h6>
                            </div>
                        </div>
                    </div>
                </div>
        <OurProducts/>
        </div>
        
    )
}

export default Collection;