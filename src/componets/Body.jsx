import RestaurantsCard from "./RestautrentCard";
import { restaurantsList, imageUrl } from "../contants";
import { useState } from "react";

function FilterData(searchText,restaurants){
    const data = restaurants.filter(
        (restaurant) => {
            return restaurant.info.name.includes(searchText);
        });
        return data;      
};

const Body = () => {

    const [searchText, setSearchInput] = useState(""); // return variable and function to update the variable
    const [restaurants, setrestaurantsCard] = useState(restaurantsList);

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
                    const data = FilterData(searchText,restaurantsList);
                    setrestaurantsCard(data);
                }}>Search</button>
            </div>


            <div className='restaurants-list' key={2}>
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantsCard {...restaurant.info} key={restaurant.info.id}/>
                    })
                }
            </div>
        </>
    );
}


export default Body;