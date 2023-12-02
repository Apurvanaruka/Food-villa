import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError(); 
    console.log(error);
    return (
        <div>
            <h1>Opps!</h1>
            <h2>Something went wrong!!</h2>
            <h3>{error.status + " : " +error.statusText}</h3>
            <h3>{error.data}</h3>
        </div>
    )
}

export default ErrorPage;