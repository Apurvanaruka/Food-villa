const imageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const RestaurantsCard = ({ cloudinaryImageId, name, areaName, avgRating, cuisines ,costForTwo}) => {
    // console.log(id);
    return (
        <div className='restaurants-card'>
            <img src={imageUrl+cloudinaryImageId} alt={name} ></img>
            <h2>{name}</h2>
            <h4>{areaName}</h4>
            <h6>{avgRating} star</h6>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{costForTwo}</h4>
        </div>
    );
}

export default RestaurantsCard;