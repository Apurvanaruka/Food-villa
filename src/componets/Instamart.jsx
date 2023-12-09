import { useState } from "react";

const data = "In January 2017, Swiggy started its cloud kitchen chain called The Bowl Company.[10] In November 2017, Swiggy started a kitchen incubator business called Swiggy Access, opening a network of ready-to-occupy kitchens for its restaurant partners.[11] By 2019, over 1,000 Swiggy Access kitchens were operational, according to a TechCrunch report In January 2017, Swiggy started its cloud kitchen chain called The Bowl Company.[10] In November 2017, Swiggy started a kitchen incubator business called Swiggy Access, opening a network of ready-to-occupy kitchens for its restaurant partners.[11] By 2019, over 1,000 Swiggy Access kitchens were operational, according to a TechCrunch report";

const Section = ({ title, disclaimer, isVisible, setIsVisible }) => {
    return (
        <div className="m-4">
            <h1 className="font-bold text-3xl">{title}</h1>
            {
                (isVisible) ?
                    (<button className="underline m-1" onClick={() => {
                        setIsVisible("off");
                    }}>hide</button>) :
                    (<button className="underline m-1" onClick={() => {
                        setIsVisible("");
                    }}> show </button>)
            }
            {isVisible && <p>{disclaimer}</p>}
        </div>
    );
}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("about");
    return (
        <div>
            <Section title={'Instamart Team'} disclaimer={data} isVisible={visibleSection === "team"} setIsVisible={(key) => setVisibleSection(key+"team")} />

            <Section title={'Instamart Care'} disclaimer={data} isVisible={visibleSection === "care"} setIsVisible={() => setVisibleSection("care")} />

            <Section title={'Instamart About'} disclaimer={data} isVisible={visibleSection === "about"} setIsVisible={() => setVisibleSection("about")} />

        </div>

    );
}

export default Instamart;