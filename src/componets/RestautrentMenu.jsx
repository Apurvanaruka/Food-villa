import { useParams } from "react-router-dom";
import { SWIGGY_API_URL } from "../contants";
import { useEffect, useState } from "react";
import { IMG_URL } from "../contants";



const RestaurantsMenu = () => {
    const [restaurantMenu, setRestaurantMenu] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const json = getRestuarantsInfo(id);
    }, []);

    async function getRestuarantsInfo(id) {
        const response = await fetch(SWIGGY_API_URL);
        const json = await response.json();
        const data = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(data);
        data?.map((restaurant) => {

            if ("id=" + restaurant.info.id == id) {
                console.log('it is executed');
                setRestaurantMenu(restaurant);
            }
        })

    }
    { console.log(restaurantMenu?.info) }
    return (
        <div className="restaurant-menu">
            <div>
                <img src={IMG_URL + restaurantMenu?.info?.cloudinaryImageId} alt={restaurantMenu.name} ></img>
            </div>
            <div>
                <h3>{restaurantMenu?.info?.name}</h3>
                <h4>{restaurantMenu?.info?.areaName}</h4>
                <h6>{restaurantMenu?.info?.avgRating} star</h6>
                <h5>{restaurantMenu?.info?.costForTwo}</h5>
            </div>
        </div>

    )
}

export default RestaurantsMenu;