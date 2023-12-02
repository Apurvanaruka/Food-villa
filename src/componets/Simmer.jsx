const RestaurantsCard = () => {
    return (
        <div className='simmer-card'>
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
        <div className="restaurants-list">
            {Array(20).fill("").map((e,index) => <RestaurantsCard key={index}/>)}
        
        </div>
    );
}

export default Simmer;