import { Helmet } from "react-helmet-async";
import Estates from "../../components/Estates/Estates";
import Slider from "../../components/Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const allData = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Hospitality Haven | Home </title>
            </Helmet>
            <div className="mx-5 lg:mx-0 -z-40">
                <Slider allData={allData}></Slider>
            </div>
            <div className="text-center mt-7 lg:mt-10 lg:mb-28">
                <h4 className="text-lg md:text-xl lg:text-2xl mb-2 font-bold font-heading text-cyan-400">Your Ultimate Destination for Premium Accommodations</h4>
                {/* <p className="text-[rgba(128,128,128,.9)] w-[88%] md:w-[65%] mx-auto">Explore a world of luxury and comfort with Hospitality Haven. From boutique hotels to charming guesthouses, find your perfect stay for every occasion. Welcome to a haven of hospitality.</p> */}
                <p className="text-[rgba(128,128,128,.9)] w-[88%] md:w-[55%] mx-auto">Discover an exquisite array of hotels, motels, resorts, vacation rentals, lodges, and guesthouses. Find your perfect stay with Hospitality Haven today</p>
            </div>
            <div>
                <Estates allData={allData}></Estates>
            </div>

        </div>
    );
};

export default Home;