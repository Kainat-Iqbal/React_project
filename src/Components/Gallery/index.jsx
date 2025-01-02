import ProductCards from "../Utilities/ProductCard";
import './index.css';
function Gallery(){
    return(
        <div id="mainGalleryDiv">
            <ProductCards image={require('./coat.jpg')} text={"Long Coats"} price={"$28.23"} />
            <ProductCards image={require('./coat.jpg')} text={"Long Coats"} price={"$28.23"} />
            <ProductCards image={require('./coat.jpg')} text={"Long Coats"} price={"$28.23"} />
            <ProductCards image={require('./coat.jpg')} text={"Long Coats"} price={"$28.23"} />
            <ProductCards image={require('./coat.jpg')} text={"Long Coats"} price={"$28.23"} />
            <ProductCards image={require('./coat.jpg')} text={"Long Coats"} price={"$28.23"} />
            <ProductCards image={require('./coat.jpg')} text={"Long Coats"} price={"$28.23"} />
            <ProductCards image={require('./coat.jpg')} text={"Long Coats"} price={"$28.23"} />
            <ProductCards image={require('./coat.jpg')} text={"Long Coats"} price={"$28.23"} />
            <ProductCards image={require('./coat.jpg')} text={"Long Coats"} price={"$28.23"} />
            <ProductCards image={require('./coat.jpg')} text={"Long Coats"} price={"$28.23"} />
            <ProductCards image={require('./coat.jpg')} text={"Long Coats"} price={"$28.23"} />

        </div>
    )
}
export default Gallery;