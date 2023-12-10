import { useSelector } from "react-redux";
import { IMG_URL } from "../contants";
import { useDispatch } from "react-redux";
import { removeItem, clearItem } from "../utils/cartSlice";
import NotFound from "../componets/Notfound";

const Section = ({ name, costForTwo, cloudinaryImageId, cuisines, areaName, aggregatedDiscountInfoV3, locality }) => {
    const dispatch = useDispatch();
    return (
        <div className="m-10 bg-gray-100 shadow-md p-3 flex">
            <div className="mr-5">
                <img className="w-56 h-60" src={IMG_URL + cloudinaryImageId}></img>
            </div>
            <div className="">
                <h1 className="text-3xl">{name}</h1>
                <h2>{costForTwo}</h2>
                <p className="font-bold">{cuisines.join(' ')}</p>
                <h2>{locality}, {areaName}</h2>
                <h2></h2>
                <br />
                <p>{aggregatedDiscountInfoV3?.discountTag} <span className="bg-red-500">{aggregatedDiscountInfoV3?.header}</span></p>
                <p className="text-xs"> {aggregatedDiscountInfoV3?.subHeader}</p>
            </div>
            <div className="ml-auto mr-10">
                <button className="mr-3 relative top-24 bg-blue-600 hover:bg-blue-500 text-white rounded-md p-1" onClick={() => {
                    dispatch(removeItem());
                }}>
                    Delete Item
                </button>
            </div>
        </div>
    );

}


const Cart = () => {

    const items = useSelector((state) => state.item);
    const dispatch = useDispatch(); 

    return (items?.length === 0) ?  <NotFound/> : (
        <>
            <div className="m-10">
                <button className="mr-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md p-1" onClick={()=>dispatch(clearItem())}>clear cart</button>
            </div>
            <div>
                {
                    items.map((item) => {
                        return <Section key={item.info.id} {...item.info}/>
                    }
                    )
                }
            </div>
        </>
    );
}

export default Cart;