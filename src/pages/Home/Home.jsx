import Estates from "../../components/Estates/Estates";
import Slider from "../../components/Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const allData = useLoaderData();

    return (
        <div>
            <div className="mx-5 lg:mx-0">
                <Slider allData ={allData} ></Slider>
            </div>
            <div>
                <Estates allData = {allData}></Estates>
            </div>

        </div>
    );
};

export default Home;