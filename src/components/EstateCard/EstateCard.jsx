import PropTypes from 'prop-types';
// import { MdOutlinePriceCheck } from "react-icons/md";
// import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const EstateCard = ({ data }) => {
    const { id, segment_name, estate_title, description, status, image, reviews, rating } = data;

    useEffect(() => {
        AOS.init({
          offset: 100, 
          delay: 200, 
          duration: 1000, 
          easing: 'ease', 
          once: false, 
        });
      }, []);
      

    return (
        <div className='lg:w-[98%] flex flex-col-reverse md:flex-row gap-5 lg:gap-0 bg-gray-100 my-8 md:my-10 lg:my-24 pb-5 md:p-10 md:pb-16 lg:pb-32 rounded-2xl shadow-lg' data-aos="fade-up">
            <div className='md:w-1/2 ml-3 md:ml-0'>
                <div className='text-lg font-description font-semibold text-[rgba(128,128,128,.9)] flex gap-3'>
                    <span>{segment_name}</span>
                    <p>for</p>
                    <span>{status}</span>
                </div>
                <div className='mb-5'>
                    <h4 className='font-bold mt-1.5 text-3xl font-heading text-cyan-500'>{estate_title.split(' ')[0]}</h4>
                    <span className='text-3xl font-heading'>{estate_title.split(' ').slice(1, estate_title.length).join(' ')}</span>
                </div>
                <p className=' font-medium mb-2 font-description text-[rgba(128,128,128,.9)]'>{description.slice(0, 200)}...</p>
                <div>
                    <Link to={`/estate/${id}`} className='btn mt-5 font-bold bg-cyan-400 text-white'>View Property</Link>
                </div>
            </div>
            <div className='md:w-1/2 md:relative'>
                <div className='h-[220px] md:h-[280px] lg:h-[380px] lg:w-[600px] rounded-2xl md:absolute lg:left-[190px] lg:-top-24' data-aos="zoom-out-left">
                    <img className='h-full w-full rounded-2xl' src={image} alt="" />
                </div>

                <div className='flex items-center bg-white mt-5 shadow rounded-xl border-x border-x-cyan-400 md:absolute md:-bottom-7 lg:left-[250px] lg:-bottom-14'>
                    <div className='border-r border-r-gray-300 p-4'>
                        <p className='mb-1 text-sm lg:text-lg font-bold font-description text-[rgba(128,128,128,.9)]'>Rating based on {reviews}+ reviews</p>
                        <div className='flex text-cyan-400 gap-1'>
                            <span><FaStar></FaStar></span>
                            <span><FaStar></FaStar></span>
                            <span><FaStar></FaStar></span>
                            <span><FaStar></FaStar></span>
                            <span><FaStar></FaStar></span>
                        </div>
                    </div>
                    <div>
                        <p className='lg:text-3xl font-bold px-12 md:px-3 text-cyan-400'>{rating}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

EstateCard.propTypes = {
    data: PropTypes.object,
}

export default EstateCard;