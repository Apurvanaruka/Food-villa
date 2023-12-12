import { useSelector } from "react-redux";

const ContactUs = () => {
    const item = useSelector(((state) => state))
    console.log(item);
    return (
        <div className="w-screen flex justify-center">
            <div className="bg-gray-100 shadow-md max-w-2xl m-10">
                <div className="h-7 bg-blue-600 "></div>
                <h1 className="text-4xl">Contact Us</h1>
                <input type="text" className="m-5 p-1 w-1/2 bg-gray-100 hover:bg-gray-200 shadow-md"
                    placeholder="Name" />
                <input type="text" className="m-5 p-1 w-10/12 bg-gray-100 hover:bg-gray-200 shadow-md"
                    placeholder="Email" />
                <textarea type="text" className="m-5 p-1 w-11/12 bg-gray-100 hover:bg-gray-200 shadow-md"
                    placeholder="Message" rows={7}  />
                <button className="m-5 bg-blue-600 hover:bg-blue-500 text-white rounded-md p-1">Submit</button>
            </div>
        </div>
    )
}

export default ContactUs;