import RestaurantsCard from "./RestautrentCard";
import { useState, useEffect } from "react";
import Simmer from "./Simmer";
import Notfound from "./Notfound";
import { SWIGGY_API_URL } from "../contants";

function FilterData(searchText, restaurants) {
    const data = restaurants.filter(
        (restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
        });
    return data;
};


const Body = () => {
    const [searchText, setSearchInput] = useState('');
    const [allrestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestuarants] = useState(allrestaurants);
    useEffect(() => {
        getResaurants();
    }, []);

    async function getResaurants() {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestuarants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // (condition) ? true : false
    // console.log(allrestaurants.length);

    return (allrestaurants?.length === 0) ? <Simmer /> : (
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
                    const data = FilterData(searchText, allrestaurants);
                    setFilteredRestuarants(data);
                }}>Search</button>
            </div>

            <div className='restaurants-list' key={2}>
                {
                    (filteredRestaurants?.length === 0) ? <Notfound /> :   
                    filteredRestaurants.map((restaurant) => {
                        return <RestaurantsCard {...restaurant.info} key={restaurant.info.id} />
                    })
                }
            </div>
        </>
    );
}


export default Body;