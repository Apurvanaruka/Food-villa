const RestaurantsCard = () => {
    return (
        <div className='bg-gray-100 h-96 w-40'>
            <img ></img>
            <h3>________</h3>
            <h4>________</h4>
            <h6>____</h6>
            <h4>___________</h4>
            <h5>_____</h5>
        </div>
    )
}

const Simmer = () => {
    return (
        <div className="flex flex-wrap">
            {Array(20).fill("").map((e,index) => <RestaurantsCard key={index}/>)}
        
        </div>
    );
}

export default Simmer;