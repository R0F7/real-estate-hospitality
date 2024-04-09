import PropTypes from 'prop-types';
import { MdOutlinePriceCheck } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const EstateCard = ({ data }) => {
    const { id, segment_name, estate_title, description, price, status, area, location, facilities, image, rating, reviews, contact } = data;

    return (
        <div className={`bg-[#214079] flex items-center gap-6 justify-between md:py-14 md:px-8 rounded-xl shadow-xl`}>
            <div className='w-1/2'>
                <h4 className='text-white font-bold text-3xl font-heading'>{estate_title.split(' ')[0]}</h4>
                <span className='text-white text-3xl font-heading'>{estate_title.split(' ').slice(1, estate_title.length).join(' ')}</span>
                <h4 className='mt-3 mb-6 text-4xl text-white font-bold font-heading'>{segment_name}</h4>
                <p className='text-white font-medium mb-2 font-description'>{description.slice(0, 100)}...</p>

                <div >
                    <div className='grid grid-cols-2 text-white font-semibold gap-y-1.5 mt-5'>
                        <h6>Status: {status}</h6>
                        <h6 className='flex items-center gap-1'>
                            <span className='text-2xl'><MdOutlinePriceCheck /></span>
                            {price}
                        </h6>
                        <h6>Area: {area}</h6>
                        <h6 className='flex items-start gap-2'>
                            <span className='text-xl mt-0.5'><FaMapLocationDot></FaMapLocationDot></span>
                            <span>{location}</span>
                        </h6>
                    </div>
                </div>

            </div>
            <div className='w-1/2 text-right'>
                <div className='md:w-[350px] md:h-[250px]'>
                    <img className='w-full h-full rounded-xl -otate-3' src={image} alt="" />
                </div>
                <Link to={`/estate/${id}`} className='btn mt-5 font-bold'>View Property</Link>
            </div>
        </div>
    );
};

EstateCard.propTypes = {
    data: PropTypes.object,
}

export default EstateCard;