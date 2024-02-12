import RestaurantsCard from "./RestautrentCard";
import { useState, useEffect, useContext } from "react";
import Simmer from "./Simmer";
import Notfound from "./Notfound";
import { SWIGGY_API_URL } from "../contants";
import { Link } from "react-router-dom";
import { FilterData } from "../utils/helper";
import { JSON } from "../contants";
import userContext from "../userContext";


const Body = () => {
    const [searchText, setSearchInput] = useState('');
    const [allrestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestuarants] = useState([]);
    const { user, setUser } = useContext(userContext);
    useEffect(() => {
        getResaurants();
    }, []);
    async function getResaurants() {
        // const data = await fetch(SWIGGY_API_URL);
        // const json = await data.json();
        // console.log(json);

        const json = JSON;
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestuarants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return (allrestaurants?.length === 0) ? <Simmer /> : (
        <>
            <div className='' key={1}>
                <input type="text" className="m-2 p-1 bg-gray-100 hover:bg-gray-200 shadow-md"
                    placeholder="search"
                    value={searchText}
                    onChange={(e) => { setSearchInput(e.target.value) }}
                />
                <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-md p-1 shadow-md" onClick={() => {
                    const data = FilterData(searchText, allrestaurants);
                    setFilteredRestuarants(data);
                }}>Search</button>
                <input placeholder="Name" type="text" className="m-2 p-1 bg-gray-100 hover:bg-gray-200 shadow-md"
                    onChange={(e) => {
                        setUser({
                            ...user,
                            name: e.target.value,
                        })
                    }}
                />
                <input placeholder="Email" type="text" className="m-2 p-1 bg-gray-100 hover:bg-gray-200 shadow-md"
                    onChange={(e) => {
                        setUser({
                            ...user, // optional
                            email: e.target.value,
                        })
                    }}
                />
            </div>
            <div data-testid="rest-list" className='flex flex-wrap justify-start' key={2} >
                {
                    (filteredRestaurants?.length === 0) ? <Notfound /> :
                        filteredRestaurants?.map((restaurant) => {
                            return <Link to={"restaurentmenu/id=" + restaurant.info.id} key={restaurant.info.id}> <RestaurantsCard {...restaurant.info} /> </Link>
                        })
                }
            </div>
        </>
    );
}


export default Body;