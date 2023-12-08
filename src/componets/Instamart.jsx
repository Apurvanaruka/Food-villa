import { useState } from "react";

const Section = ({ title, disclaimer }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="m-4">
            <h1 className="font-bold text-3xl">{title}</h1>
            {
                (isVisible) ?
                    (<button className="underline m-1" onClick={() => {
                        setIsVisible(false)
                    }}>hide</button>) :
                    (<button className="underline m-1" onClick={() => {
                        setIsVisible(true)
                    }}> show </button>)
            }
            {isVisible && <p>{disclaimer}</p>}
        </div>
    );
}

const Instamart = () => {

    return (
        <div>
            <Section title={'Instamart Team'} disclaimer={"In January 2017, Swiggy started its cloud kitchen chain called The Bowl Company.[10] In November 2017, Swiggy started a kitchen incubator business called Swiggy Access, opening a network of ready-to-occupy kitchens for its restaurant partners.[11] By 2019, over 1,000 Swiggy Access kitchens were operational, according to a TechCrunch report In January 2017, Swiggy started its cloud kitchen chain called The Bowl Company.[10] In November 2017, Swiggy started a kitchen incubator business called Swiggy Access, opening a network of ready-to-occupy kitchens for its restaurant partners.[11] By 2019, over 1,000 Swiggy Access kitchens were operational, according to a TechCrunch report"} />

            <Section title={'Instamart Care'} disclaimer={"In January 2017, Swiggy started its cloud kitchen chain called The Bowl Company.[10] In November 2017, Swiggy started a kitchen incubator business called Swiggy Access, opening a network of ready-to-occupy kitchens for its restaurant partners.[11] By 2019, over 1,000 Swiggy Access kitchens were operational, according to a TechCrunch report In January 2017, Swiggy started its cloud kitchen chain called The Bowl Company.[10] In November 2017, Swiggy started a kitchen incubator business called Swiggy Access, opening a network of ready-to-occupy kitchens for its restaurant partners.[11] By 2019, over 1,000 Swiggy Access kitchens were operational, according to a TechCrunch report"} />

            <Section title={'Instamart About'} disclaimer={"In January 2017, Swiggy started its cloud kitchen chain called The Bowl Company.[10] In November 2017, Swiggy started a kitchen incubator business called Swiggy Access, opening a network of ready-to-occupy kitchens for its restaurant partners.[11] By 2019, over 1,000 Swiggy Access kitchens were operational, according to a TechCrunch report In January 2017, Swiggy started its cloud kitchen chain called The Bowl Company.[10] In November 2017, Swiggy started a kitchen incubator business called Swiggy Access, opening a network of ready-to-occupy kitchens for its restaurant partners.[11] By 2019, over 1,000 Swiggy Access kitchens were operational, according to a TechCrunch report"} />

        </div>

    );
}

export default Instamart;