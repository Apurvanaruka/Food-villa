import { useSelector } from "react-redux";

const ContactUs = () => {
const item = useSelector(((state) => state))
    console.log(item);
    return (
        <div>
            <h1>Contact Us</h1>
            <h2>Welcome to contact us page!</h2>
        </div>
    )
}

export default ContactUs;