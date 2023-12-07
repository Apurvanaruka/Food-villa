import { IMG_URL } from "../contants.js";

const RestaurantsCard = ({ cloudinaryImageId, name, areaName, avgRating, cuisines ,costForTwo}) => {
    // console.log(id);
    return (
        <div className="w-56 min-h-96 m-2 bg-gray-100 hover:bg-gray-200 ">
            <img className="w-56 h-60" 
            src={IMG_URL+cloudinaryImageId} alt={name} ></img>
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h6>{avgRating} star</h6>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{costForTwo}</h5>
        </div>
    );
}

export default RestaurantsCard;