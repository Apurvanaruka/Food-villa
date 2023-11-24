
const RestaurantsCard = ({ image_link, name, address, rating, keys }) => {
    return (
        <div className='restaurants-card'
            key={keys}
        >
            <img src={image_link} alt={name} />
            <h2>{name}</h2>
            <h4>{address}</h4>
            <h3>{rating} star</h3>
        </div>
    );
}

export default RestaurantsCard;