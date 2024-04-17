import { useParams, useLoaderData } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { BsTicketDetailed } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaPrayingHands } from "react-icons/fa";
import { TbMassage } from "react-icons/tb";
import { VscSymbolMethod } from "react-icons/vsc";
import { IoBookmarksOutline } from "react-icons/io5";
import { setLocalStorageData } from '../../Utility/Utility';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


const EstateDetails = () => {
    const { id } = useParams();
    const allData = useLoaderData();

    const data = allData.find(data => data.id === id);

    const { segment_name, estate_title, description, price, status, area, location, facilities, image, image1, image2, image3, image4, contact, short_description } = data;

    const handleBooking = (data) => {
        setLocalStorageData(data);
    }

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
        <div className='mx-5 md:mx-0'>
             <Helmet>
                <title>Hospitality Haven | EstateDetails</title>
            </Helmet>

            <div className='h-[300px] lg:h-[450px] grid grid-cols-5 grid-rows-2 gap-4 '>

                <div
                    className="col-span-5 md:col-span-3 row-span-2 w-full h-full rounded-xl bg-cover bg-no-repeat bg-cyan-400"
                    style={{
                        background: `linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%), url(${image}) cyan 10px -18.896px / 100% 123.31% no-repeat`,
                    }}
                    data-aos="fade-right"
                >
                    <div className='flex flex-col justify-center items-center h-full'>
                        <p className='text-white text-lg md:text-4xl font-bold font-heading md:mb-1.5'>{segment_name} for {status}</p>
                        <h4 className='text-white text-xl md:text-2xl font-description mb-2 md:mb-3.5'>{estate_title}</h4>
                        <h6 className='text-white w-[80%] lg:w-[70%] text-center text-sm '>{short_description}</h6>
                    </div>
                </div>


                <div className='col-span-2 hidden md:grid grid-cols-2 gap-4 h-full' data-aos="fade-left">
                    <img className='w-full h-[143px] lg:h-[217px] rounded-xl' src={image1} alt="" />
                    <img className='w-full h-[143px] lg:h-[217px] rounded-xl' src={image2} alt="" />
                    <img className='w-full h-[143px] lg:h-[217px] rounded-xl' src={image3} alt="" />
                    <img className='w-full h-[143px] lg:h-[217px] rounded-xl' src={image4} alt="" />
                </div>
            </div>

            <div className='flex lg:flex-row flex-col gap-10 my-10'>
                <div className='lg:w-3/4'>
                    <div className='flex items-center justify-between mb-2'>
                        <h4 className='text-3xl lg:text-4xl font-bold font-heading text-cyan-500'>{segment_name} for {status}</h4>
                        <div className='flex text-2xl lg:text-3xl gap-4 text-cyan-400'>
                            <span><FaRegHeart /></span>
                            <span><CiShare2 /></span>
                            <span> <BsTicketDetailed /></span>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center my-4 md:my-8' data-aos="fade-up-right">
                        <div className='flex gap-4 md:gap-6  p-3 md:p-4 rounded-lg'>
                            <div className=' text-cyan-400 border border-cyan-400 rounded-xl w-[70px]  md:w-28 h-24  flex flex-col items-center justify-center'>
                                <span className='text-lg lg:text-2xl mb-1.5'><FaPrayingHands /></span>
                                <h4 className='text-sm font-semibold text-center font-description text-cyan-500'>Extra Facility</h4>
                            </div>
                            <div className=' text-cyan-400 border border-cyan-400 rounded-xl w-[70px]  md:w-28 h-24  flex flex-col items-center justify-center'>
                                <span className='text-lg lg:text-2xl mb-1.5'><TbMassage /></span>
                                <h4 className='text-sm font-semibold text-center font-description text-cyan-500'>Higher Quality </h4>
                            </div>
                            <div className=' text-cyan-400 border border-cyan-400 rounded-xl w-[70px]  md:w-28 h-24  flex flex-col items-center justify-center'>
                                <span className='text-lg lg:text-2xl mb-1.5'><FaCar /></span>
                                <h4 className='text-sm font-semibold text-center font-description text-cyan-500'>Have parking</h4>
                            </div>
                            <div className=' text-cyan-400 border border-cyan-400 rounded-xl w-[70px]  md:w-28 h-24  flex flex-col items-center justify-center'>
                                <span className='text-lg lg:text-2xl mb-1.5'><MdPets /></span>
                                <h4 className='text-sm font-semibold text-center font-description text-cyan-500'>Pets allow</h4>
                            </div>
                        </div>
                        <div>
                            <div onClick={() => handleBooking(data)} className='mt-5 md:mt-0'>
                                <div className='text-cyan-400 border-x border-dashed border-cyan-400 p-1.5 rounded-xl'>
                                    <div className='text-xl text-white hover:bg-white hover:text-cyan-400 bg-cyan-400 hover:border hover:border-cyan-400 rounded-xl py-2 px-8 flex gap-2 items-center'>
                                        <span className='text-xl '><IoBookmarksOutline /></span>
                                        <h4 className='text-xl font-semibold font-description'>Bookmark</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up-right">
                        <h4 className='text-3xl font-bold font-heading mb-3 text-cyan-500'>{estate_title}</h4>
                        <p className='font-description mb-3 text-[rgba(128,128,128,.9)]'>{description}</p>
                    </div>
                    <div className='mb-3' data-aos="fade-up-right">
                        <h4 className='text-2xl font-bold font-heading mb-2 text-cyan-500'>Facilities:</h4>
                        <div className='ml-3'>
                            {
                                facilities.map((facility, idx) => <div className='flex items-center gap-1.5' key={idx}>
                                    <span className='text-[9px] text-cyan-500'><VscSymbolMethod /></span>
                                    <h4 className='text-lg font-description font-medium opacity-70 tet-[#808080]'>{facility}</h4>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-y-3 gap-x-8 my-4 lg:w-3/4 bg-gradient-to-r from-[rgba(204,204,204,0.45)] hover:shadow-lg to-[rgba(230,230,230,.25)] rounded-lg px-6 py-8' data-aos="fade-up-right">
                        <div>
                            <p className=' font-description text-sm md:text-lg font-medium text-[#808080]'><span className='text-xl font-bold font-heading text-cyan-400'>Status: </span>{status}</p>
                            <div className=' h-[1px] bg-white mt-1.5 w-[65%]'></div>
                        </div>
                        <div>
                            <p className=' font-description text-lg font-medium text-[#808080]'><span className='text-xl font-bold font-heading text-cyan-400'>Price: </span>{price}</p>
                            <div className=' h-[1px] bg-white mt-1.5 w-[70%]'></div>
                        </div>
                        <div>
                            <p className=' font-description text-sm md:text-lg font-medium text-[#808080]'><span className='text-xl font-bold font-heading text-cyan-400'>Area: </span>{area}</p>
                            <div className=' h-[1px] bg-white mt-1.5 w-[80%]'></div>
                        </div>
                        <div>
                            <p className='font-description text-sm md:text-lg font-medium text-[#808080]'><span className='text-xl font-bold font-heading text-cyan-400'>Location: </span>{location}</p>
                            <div className=' h-[1px] bg-white mt-1.5 w-[89%]'></div>
                        </div>
                        <div>
                            <p className=' font-description text-sm md:text-lg font-medium text-[#808080]'><span className='text-xl font-bold font-heading text-cyan-400'>Phone: </span>{contact.phone}</p>
                            <div className=' h-[1px] bg-white mt-1.5 w-[95%]'></div>
                        </div>
                        <div>
                            <p className='font-description text-sm md:text-lg font-medium text-[#808080]'><span className='text-xl font-bold font-heading text-cyan-400'>Email: </span>{contact.email}</p>
                            <div className=' h-[1px] bg-white mt-1.5 '></div>
                        </div>
                    </div>
                </div>
                <div className='md:w-3/4 lg:w-1/4 md:mx-auto' data-aos="fade-up-left">
                    <form className=' border p-6 rounded-xl'>
                        <h2 className='text-center text-3xl font-bold font-description text-cyan-400'>Contact Us</h2>
                        <div>
                            <label htmlFor="name">
                                <h6 className='font-heading font-semibold text-[#808080]'>Name</h6>
                                <input type="text" id='name' placeholder="Name" className="input input-bordered w-full lg:max-w-xs mt-0.5" />
                            </label>
                        </div>
                        <div className='mt-1'>
                            <label htmlFor="email">
                                <h6 className='font-heading font-semibold text-[#808080]'>Email</h6>
                                <input type="text" id='email' placeholder="Email" className="input input-bordered w-full lg:max-w-xs mt-0.5" />
                            </label>
                        </div>
                        <div className='mt-3.5'>
                            <textarea className="textarea textarea-bordered w-full h-36" placeholder="Details"></textarea>
                        </div>
                        <div className='text-center mt-2'>
                            <button className='bg-[#05BFDB] text-white w-full py-2 rounded-full font-bold'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default EstateDetails;