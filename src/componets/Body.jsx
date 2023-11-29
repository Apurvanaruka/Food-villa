import RestaurantsCard from "./RestautrentCard";
import { restaurantsList } from "../contants";
import { useState, useEffect } from "react";

function FilterData(searchText,restaurants){
    const data = restaurants.filter(
        (restaurant) => {
            return restaurant.info.name.includes(searchText);
        });
        return data;      
};


const Body = () => {

    const [searchText, setSearchInput] = useState(""); // return variable and function to update the variable
    const [ allrestaurants, setAllRestaurants ] = useState(restaurantsList);
    const [ filteredRestaurants, setFilteredRestuarants ] = useState(allrestaurants);


    useEffect(() => {
        getResaurants();
    },[]);

    async function getResaurants(){
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.5922846&lng=76.62683059999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info);
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestuarants(allrestaurants)
    } 
    

    return (
        <>
            <div
                // use React variable for state variables 
                className='search-bar'
                key={1}>
                <input type="text"
                    placeholder="search"
                    value={searchText}
                    onChange={(e) => { setSearchInput(e.target.value) }}
                />
                <button onClick={() => {
                    const data = FilterData(searchText,allrestaurants);
                    setFilteredRestuarants(data);
                    console.log(data);
                }}>Search</button>
            </div>


            <div className='restaurants-list' key={2}>
                {
                    filteredRestaurants.map((restaurant) => {
                        return <RestaurantsCard {...restaurant.info} key={restaurant.info.id}/>
                    })
                }
            </div>
        </>
    );
}


export default Body;