async function getRestaurentMenu(){
    const data = await fetch('https://www.swiggy.com/restaurants/pizza-hut-evershine-tower-vaishali-nagar-jaipur-47597');
    const json = await data.json();
    console.log(json);
}

const RestaurantsMenu = () => {
    getRestaurentMenu();
    return (
        <h1>Menu page</h1>
    )
}

export default RestaurantsMenu;