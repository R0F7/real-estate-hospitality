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

const EstateDetails = () => {
    const { id } = useParams();
    const allData = useLoaderData();

    const data = allData.find(data => data.id === id);

    const { segment_name, estate_title, description, price, status, area, location, facilities, image, contact } = data;

    const handleBooking = (data) => {
        setLocalStorageData(data);
    }

    return (
        <div>
            <div className='h-[450px] grid grid-cols-5 grid-rows-2 gap-4'>
                <img className='w-full h-full col-span-3 row-span-2 rounded-xl' src={image} alt="" />
                <div className='col-span-2 grid grid-cols-2 gap-4 h-full'>
                    <img className='w-full h-[217px] rounded-xl' src={image} alt="" />
                    <img className='w-full h-[217px] rounded-xl' src={image} alt="" />
                    <img className='w-full h-[217px] rounded-xl' src={image} alt="" />
                    <img className='w-full h-[217px] rounded-xl' src={image} alt="" />
                </div>
            </div>

            <div className='flex gap-10 my-10'>
                <div className='w-3/4'>
                    <div className='flex items-center justify-between mb-2'>
                        <h4 className='text-4xl font-bold font-heading '>{segment_name} for {status}</h4>
                        <div className='flex text-2xl gap-4'>
                            <span><FaRegHeart /></span>
                            <span><CiShare2 /></span>
                            <span> <BsTicketDetailed /></span>
                        </div>
                    </div>
                    <div className='flex justify-between my-8'>
                        <div className='flex gap-6 border p-4 border-cyan-400 rounded-lg'>
                            <div className='text-xl text-cyan-400 border border-cyan-400 rounded-xl w-28 h-24  flex flex-col items-center justify-center'>
                                <span className='text-2xl mb-1.5'><FaPrayingHands /></span>
                                <h4 className='text-sm font-semibold font-description'>Extra Facility</h4>
                            </div>
                            <div className='text-xl text-cyan-400 border border-cyan-400 rounded-xl w-28 h-24  flex flex-col items-center justify-center'>
                                <span className='text-2xl mb-1.5'><TbMassage /></span>
                                <h4 className='text-sm font-semibold font-description'>Higher Quality </h4>
                            </div>
                            <div className='text-xl text-cyan-400 border border-cyan-400 rounded-xl w-28 h-24  flex flex-col items-center justify-center'>
                                <span className='text-2xl mb-1.5'><FaCar /></span>
                                <h4 className='text-sm font-semibold font-description'>Have parking</h4>
                            </div>
                            <div className='text-xl text-cyan-400 border border-cyan-400 rounded-xl w-28 h-24  flex flex-col items-center justify-center'>
                                <span className='text-2xl mb-1.5'><MdPets /></span>
                                <h4 className='text-sm font-semibold font-description'>Pets allow</h4>
                            </div>
                        </div>
                        <div>
                            <div onClick={() => handleBooking(data)}>
                                <div className='text-cyan-400 border-x border-dashed border-cyan-400 p-1.5 rounded-xl'>
                                    <div className='text-xl text-cyan-400 border border-cyan-400 rounded-xl px-8  py-3 flex flex-col items-center'>
                                        <span className='text-4xl mb-1.5'><IoBookmarksOutline /></span>
                                        <h4 className='text-sm font-semibold font-description'>Bookmark</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-3xl font-bold font-heading mb-3'>{estate_title}</h4>
                        <p className='font-description mb-3'>{description}</p>
                    </div>
                    <div className='mb-3'>
                        <h4 className='text-2xl font-bold font-heading mb-2'>Facilities:</h4>
                        <div className='ml-3'>
                            {
                                facilities.map((facility, idx) => <div className='flex items-center gap-1.5' key={idx}>
                                    <span className='text-[9px]'><VscSymbolMethod /></span>
                                    <h4 className='text-lg font-description font-medium'>{facility}</h4>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-y-3 gap-x-8 my-4 w-3/4'>
                        <div>
                            <p className=' font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Price: </span>{price}</p>
                            <div className=' h-[1px] bg-[rgba(5,191,219)] mt-1.5 w-[65%]'></div>
                        </div>
                        <div>
                            <p className=' font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Status: </span>{status}</p>
                            <div className=' h-[1px] bg-[#05BFDB] mt-1.5 w-[65%]'></div>
                        </div>
                        <div>
                            <p className=' font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Area: </span>{area}</p>
                            <div className=' h-[2px] bg-[#05BFDB] mt-1.5 w-[80%]'></div>
                        </div>
                        <div>
                            <p className='font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Location: </span>{location}</p>
                            <div className=' h-[2px] bg-[#05BFDB] mt-1.5 w-[80%]'></div>
                        </div>
                        <div>
                            <p className=' font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Phone: </span>{contact.phone}</p>
                            <div className=' h-[1px] bg-[#05BFDB] mt-1.5 w-[95%]'></div>
                        </div>
                        <div>
                            <p className='font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Email: </span>{contact.email}</p>
                            <div className=' h-[1px] bg-[#05BFDB] mt-1.5 '></div>
                        </div>
                    </div>
                    <div>
                        { }
                    </div>
                </div>
                <div className='w-1/4'>
                    <form className=' border p-6 rounded-xl'>
                        <h2 className='text-center text-3xl font-semibold font-description'>Contact Us</h2>
                        <div>
                            <label htmlFor="name">
                                <h6 className='font-heading font-semibold'>Name</h6>
                                <input type="text" id='name' placeholder="Name" className="input input-bordered w-full max-w-xs mt-0.5" />
                            </label>
                        </div>
                        <div className='mt-1'>
                            <label htmlFor="email">
                                <h6 className='font-heading font-semibold'>Email</h6>
                                <input type="text" id='email' placeholder="Email" className="input input-bordered w-full max-w-xs mt-0.5" />
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