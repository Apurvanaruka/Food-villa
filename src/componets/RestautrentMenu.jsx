import { useParams } from "react-router-dom";
import { IMG_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantsMenu = () => {
    const { id } = useParams();
    const restaurantMenu = useRestaurant(id);
    console.log(restaurantMenu);
    return (
        <div className="m-10 flex">
            <div>
                <img className="w-96" src={IMG_URL + restaurantMenu?.info?.cloudinaryImageId} alt="" ></img>
            </div>
            <div className="m-5">
                <h1 className="text-3xl">{restaurantMenu?.info?.name}</h1>
                <h4>{restaurantMenu?.info?.areaName}</h4>
                <p>{restaurantMenu?.info?.cuisines.join(' ')}</p>
                <h6>{restaurantMenu?.info?.avgRating} star</h6>
                <h5>{restaurantMenu?.info?.costForTwo}</h5>
            </div>
        </div>
    );
}

export default RestaurantsMenu;