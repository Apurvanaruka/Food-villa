import { GITHUB_API_URL } from "../contants";


export function FilterData(searchText, restaurants) {
    const data = restaurants.filter(
        (restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
        });
    return data;
};
