import { IMG_URL } from "../contants.js";
import userContext from "../userContext.js";
import { useContext } from "react";

const RestaurantsCard = ({ cloudinaryImageId, name, areaName, avgRating, cuisines, costForTwo, aggregatedDiscountInfoV3 }) => {

    const { user } = useContext(userContext);

    return (
        <div className="w-64 m-2 hover:p-1 ">
            <div className="relative text-white text-">
                <img className="w-full h-44 rounded-2xl"
                    src={IMG_URL + cloudinaryImageId} alt={name} ></img>
                <div className="absolute bottom-0 left-2 font-extrabold">
                    <p>{aggregatedDiscountInfoV3?.discountTag} <span>{aggregatedDiscountInfoV3?.header}</span></p>
                    <p> {aggregatedDiscountInfoV3?.subHeader}</p>
                </div>
            </div>
            <div className="ml-2">
                <h3 className="text-2xl font-medium">{name}</h3>
                <h4>{areaName}</h4>
                <h6>{avgRating} star</h6>
                <h4>{cuisines.slice(0,3).join(", ")}</h4>
                {/* <h5>{costForTwo}</h5> */}
                {/* <h1>{user?.name}</h1> */}
            </div>
        </div>
    );
}

export default RestaurantsCard;