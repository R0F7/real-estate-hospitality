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
                <Slider allData ={allData} ></Slider>
            </div>
            <div>
                <Estates allData = {allData}></Estates>
            </div>

        </div>
    );
};

export default Home;