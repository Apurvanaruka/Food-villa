import { useState, useEffect } from 'react';
import { SWIGGY_API_URL } from "../contants";
import { JSON } from '../contants';

const useRestaurant = (id) => {
    const [restaurantMenu, setRestaurantMenu] = useState({});


    useEffect(() => {
        getRestuarantsInfo(id);
    }, []);

    async function getRestuarantsInfo(id) {
        // const response = await fetch(SWIGGY_API_URL);
        // const json = await response.json();
        const json = JSON;
        const data = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        data?.map((restaurant) => {
            if ("id=" + restaurant.info.id === id) {
                setRestaurantMenu(restaurant);
            }
        });
    }
    return restaurantMenu;
}

export default useRestaurant;