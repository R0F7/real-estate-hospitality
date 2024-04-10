import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
    const { status, statusText, data } = useRouteError();

    return (
        <div className="flex flex-col justify-center items-center min-h-screen ">
            <h4 className="text-7xl text-red-500 font-bold">{status}</h4>
            <p className="text-7xl font-bold">{statusText}</p>
            <h6 className="text-xl text-center lg:text-5xl font-bold mb-10 mt-5">{data}</h6>
            <div>
                <Link to="/" className="bg-[#59C6D2] py-4 px-5 lg:py-5 lg:px-7 text-white Work-Sans text-sm lg:text-lg font-semibold rounded-lg">Back Home</Link>
            </div>
        </div>
    );
};

export default NotFound;