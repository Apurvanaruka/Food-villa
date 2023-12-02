import { IMG_URL } from "../contants.js";

const RestaurantsCard = ({ cloudinaryImageId, name, areaName, avgRating, cuisines ,costForTwo}) => {
    // console.log(id);
    return (
        <div className='restaurants-card'>
            <img src={IMG_URL+cloudinaryImageId} alt={name} ></img>
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h6>{avgRating} star</h6>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{costForTwo}</h5>
        </div>
    );
}

export default RestaurantsCard;