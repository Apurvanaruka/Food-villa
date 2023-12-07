import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantsMenu = () => {
    const { id } = useParams();
    const restaurantMenu = useRestaurant(id)
    console.log(restaurantMenu);
    return (
        <div className="restaurant-menu">
            <div>
                <img src={IMG_URL + restaurantMenu?.info?.cloudinaryImageId} alt="" ></img>
            </div>
            <div>
                <h3>{restaurantMenu?.info?.name}</h3>
                <h4>{restaurantMenu?.info?.areaName}</h4>
                <h6>{restaurantMenu?.info?.avgRating} star</h6>
                <h5>{restaurantMenu?.info?.costForTwo}</h5>
            </div>
        </div>
    );
}

export default RestaurantsMenu;