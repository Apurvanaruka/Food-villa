import RestaurantsCard from "./RestautrentCard";
import { restaurants } from "../contants";
import { useState } from "react";



const Body = () => {
    let searchTxt = "search";

    const [searchText, setSearchInput] = useState(); // return variable and function to update the variable
    const [restaurantsCard, setrestaurantsCard] = useState(restaurants);

    return (
        <>
            <div
                // use React variable for state variables 
                className='search-bar'
                key={1}
            >
                <input type="text"
                    placeholder="search"
                    value={searchText}
                    onChange={(e) => { setSearchInput(e.target.value) }}
                />
                <button onClick={() => {

                }}>Search</button>
            </div>


            <div className='restaurants-list'
                key={2}
            >
                {
                    restaurantsCard.restaurants.map((restaurant) => {
                        return <RestaurantsCard {...restaurant} />
                    })
                }
            </div>
        </>
    );
}


export default Body;