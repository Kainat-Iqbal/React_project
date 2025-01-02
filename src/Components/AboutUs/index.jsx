import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.css';
import AboutCard from '../Utilities/AboutCard';
import Footer from '../Footer';

function AboutUs() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div id="mainAboutDiv">
            <div id="topDiv">
                <h1>What People Say About Us</h1>
                <h3>You have helped our family with what is possibly the hardest job around.</h3>
            </div>
            <Carousel id="crousel" responsive={responsive}>
                <AboutCard image={require('./img1.jpg')} title={"Comfortable and Met all my expectations! Ordered a meium and it fit perfectly"} 
                review={"Download the perfect girl profile pictures. Find over 100+ of the best free girl profile images. Find over 100+ of the best free girl profile images."} name={"Anis Zehra"}/>
                <AboutCard image={require('./img2.jpg')} title={"it is coat"} review={"it is soft"} name={"Anis Zehra"}/>
                <AboutCard image={require('./img3.jpg')} title={"it is coat"} review={"it is soft"} name={"Anis Zehra"}/>
                <AboutCard image={require('./img4.jpg')} title={"it is coat"} review={"it is soft"} name={"Anis Zehra"}/>
                <AboutCard image={require('./img5.jpg')} title={"it is coat"} review={"it is soft"} name={"Anis Zehra"}/>
                <AboutCard image={require('./img6.jpg')} title={"it is coat"} review={"it is soft"} name={"Anis Zehra"}/>
                <AboutCard image={require('./img7.jpg')} title={"it is coat"} review={"it is soft"} name={"Anis Zehra"}/>
            </Carousel>
        </div>
    )
}

export default AboutUs;