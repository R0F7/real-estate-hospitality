import Estates from "../../components/Estates/Estates";
import Slider from "../../components/Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const allData = useLoaderData();

    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div>
                <Estates allData = {allData}></Estates>
            </div>

        </div>
    );
};

export default Home;