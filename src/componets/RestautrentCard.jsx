import { IMG_URL } from "../contants.js";
import userContext from "../userContext.js";
import { useContext } from "react";

const RestaurantsCard = ({ cloudinaryImageId, name, areaName, avgRating, cuisines ,costForTwo}) => {

    const {user} = useContext(userContext);

    return (
        <div className="w-56 min-h-96 m-2 bg-gray-100 hover:bg-gray-200 shadow-md ">
            <img className="w-56 h-60" 
            src={IMG_URL+cloudinaryImageId} alt={name} ></img>
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h6>{avgRating} star</h6>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{costForTwo}</h5>
            <h1>{user?.name}</h1>
        </div>
    );
}

export default RestaurantsCard;