import './style.css';


function Footer() {
    return (
        <div id="mainFooter">
            <div id="topFooter">
                <img src={require('./coat.jpg')} />
                <img src={require('./hoodies.jpg')} />
                <img src={require('./bellBottom.jpg')} />
                <img src={require('./baloon-top.jpg')} />
                <img src={require('./kurti.jpg')} />
                <img src={require('./formal-shirt.jpg')} />
                <img src={require('./jacket.jpg')} />
            </div>
            <div id="bottomFooter">
                <div id="bottomFooterText">
                    <p>Follow Our Instagram @ Fifash_trends</p>
                </div>
            </div>

        </div>
    )
}
export default Footer;