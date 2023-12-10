import { redirect, useParams } from "react-router-dom";
import { IMG_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantsMenu = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
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
                <button className="mr-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md p-1" onClick={() => {
                    dispatch(addItem(restaurantMenu));
                    }}>Add Item</button>
            </div>
        </div>
    );
}

export default RestaurantsMenu;