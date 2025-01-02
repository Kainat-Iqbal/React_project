function AboutCard({image,title,review,name}) {
    return (
        <div id="aboutCard">
            <p id='title'>{title}</p>
            <p id="text">{review}</p>
            <img src={image} />
            <p id='name'>{name}</p>
        </div>
    )
}
export default AboutCard;