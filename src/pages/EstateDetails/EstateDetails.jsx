import { useParams, useLoaderData } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { BsTicketDetailed } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaPrayingHands } from "react-icons/fa";
import { TbMassage } from "react-icons/tb";
import { VscSymbolMethod } from "react-icons/vsc";

const EstateDetails = () => {
    const { id } = useParams();
    const allData = useLoaderData();

    const data = allData.find(data => data.id === id);

    const { segment_name, estate_title, description, price, status, area, location, facilities, image, rating, reviews, contact } = data;

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
                        <h4 className='text-4xl font-bold font-heading '>{segment_name}</h4>
                        <div className='flex text-2xl gap-4'>
                            <span><FaRegHeart /></span>
                            <span><CiShare2 /></span>
                            <span> <BsTicketDetailed /></span>
                        </div>
                    </div>
                    <div className='flex  justify-between my-8'>
                        <div className='text-xl border rounded-xl w-48 py-6 flex flex-col items-center'>
                            <span className='text-4xl mb-1.5'><FaPrayingHands /></span>
                            <h4 className='text-sm font-semibold font-description'>Extra Facility</h4>
                        </div>
                        <span className='text-xl border rounded-xl w-48 py-6 flex flex-col items-center'>
                            <span className='text-4xl mb-1.5'><TbMassage /></span>
                            <h4 className='text-sm font-semibold font-description'>Higher Quality </h4>
                        </span>
                        <span className='text-xl border rounded-xl w-48 py-6 flex flex-col items-center'>
                            <span className='text-4xl mb-1.5'><FaCar /></span>
                            <h4 className='text-sm font-semibold font-description'>Have parking</h4>
                        </span>
                        <span className='text-xl border rounded-xl w-48 py-6 flex flex-col items-center'>
                            <span className='text-4xl mb-1.5'><MdPets /></span>
                            <h4 className='text-sm font-semibold font-description'>Pets allow</h4>
                        </span>
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
                        <p className='border-b pb-1.5 font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Price: </span>{price}</p>
                        <p className='border-b pb-1.5 font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Status: </span>{status}</p>
                        <p className='border-b pb-1.5 font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Area: </span>{area}</p>
                        <p className='border-b pb-1.5 font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Location: </span>{location}</p>
                        <p className='border-b pb-1.5 font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Rating: </span>{rating}</p>
                        <p className='border-b pb-1.5 font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Review: </span>{reviews}</p>
                        <p className='border-b pb-1.5 font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Phone: </span>{contact.phone}</p>
                        <p className='border-b pb-1.5 font-description text-lg font-medium'><span className='text-xl font-bold font-heading'>Email: </span>{contact.email}</p>
                    </div>
                    <div>
                        { }
                    </div>
                </div>
                <div className='w-1/4'>
                    <form className=' border p-6 rounded-xl'>
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