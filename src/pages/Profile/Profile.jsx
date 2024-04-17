
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { RiTwitterXFill } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const { user } = useContext(AuthContext);
    // console.log('profile',user);

    return (
        <div className="lg:h-[calc(100vh-386px)] mb-10 lg:-mt-0 flex items-center ">
             <Helmet>
                <title>Hospitality Haven | Profile</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row shadow-2xl md:w-1/2 lg:h-[350px] rounded-lg lg:my-10 mx-auto bg-gradient-to-r from-[rgba(204,204,204,.55)] to-[rgba(230,230,230,.25)] ">
                <div className="p-6 flex flex-col justify-center h-full lg:w-2/5 text-center">

                    <div className=" w-32 mx-auto rounded-full border-[10px] border-x-cyan-400 p-3 border-y-0 mb-4">
                        <div className="flex items-center w-[85px] h-[88px]"> <img className="h-full w-full rounded-full" src={user && user.photoURL || 'https://i.ibb.co/51kxBQ8/istockphoto-1327592506-612x612.jpg'} alt="User" /></div>
                    </div>

                    <h4 className="text-xl font-description font-bold text-[rgba(0,212,255,.8)] mb-1.5">{user ? user?.displayName : 'Unknown'}</h4>
                    <h6 className="font-description text-xl font-bold text-cyan-400">UID: <span className="text-lg font-medium text-[rgba(128,128,128,.9)] font-description">{user && user?.uid}</span></h6>
                </div>
                <div className="h-full w-[1.50px] b-[rgba(0,0,0,.05)]  bg-gradient-to-t from-[rgba(0,26,36,0.28895308123249297)]  to-[rgba(0,212,255,1)] b-[rgba(34,211,238,0.3)]"></div>
                <div className="p-6 lg:w-3/5 ">
                    <h2 className="mb-4 font-bold font-description text-2xl text-cyan-400">Profile Details</h2>

                    <div className="space-y-2.5">
                        <h4 className="flex"><h4 className="font-bold text-cyan-400 text-right w-[70px]">Name : </h4><span className="font-semibold bg-[#e6e6e6] shadow py-0.5 pl-2 pr-7 w-[70%] lg:w-[250px] text-[#4b5563] font-description ml-4 ">{user && user.displayName}</span></h4>
                        <h5 className="flex"><h4 className="font-bold text-cyan-400 text-right w-[70px]">Age : </h4><span className="font-semibold bg-[#e6e6e6] shadow py-0.5 pl-2 pr-7 w-[70%] lg:w-[250px] text-[#4b5563] font-description ml-4 ">xx</span></h5>
                        <h4 className="flex"><h4 className="font-bold text-cyan-400 text-right w-[70px]">Mobile : </h4><span className="font-semibold bg-[#e6e6e6] shadow py-0.5 pl-2 pr-7 w-[70%] lg:w-[250px] text-[#4b5563] font-description ml-4 ">xxxxxxxxxxx</span></h4>
                        <h4 className="flex"><h4 className="font-bold text-cyan-400 text-right w-[70px]">Address : </h4><span className="font-semibold bg-[#e6e6e6] shadow py-0.5 pl-2 pr-7 w-[70%] lg:w-[250px] text-[#4b5563] font-description ml-4 ">Earth</span></h4>
                        <h6 className="flex"><h4 className="font-bold text-cyan-400 text-right w-[70px]">Email : </h4><span className="font-semibold bg-[#e6e6e6] shadow py-0.5 pl-2 pr-7 w-[70%] lg:w-[250px] text-[#4b5563] font-description ml-4 ">{user && user?.email || 'email not found'}</span></h6>
                    </div>
                    <div className="flex justify-center lg:justify-normal gap-4 mt-5">
                        <span className="h-8 w-14 lg:h-11 lg:w-11 flex justify-center items-center rounded-full shadow-xl bg-cyan-400 text-lg hover:bg-transparent hover:border-2 hover:border-cyan-400 hover:text-cyan-400 transition hover:duration-200 ease-out hover:ease-in  text-white"><FiTwitter /></span>
                        <span className="h-8 w-14 lg:h-11 lg:w-11 flex justify-center items-center rounded-full shadow-2xl bg-cyan-400 text-lg hover:bg-transparent hover:border-2 hover:border-cyan-400 hover:text-cyan-400 transition hover:duration-200 ease-out hover:ease-in  text-white"><LuFacebook /></span>
                        <span className="h-8 w-14 lg:h-11 lg:w-11 flex justify-center items-center rounded-full shadow-xl bg-cyan-400 text-lg hover:bg-transparent hover:border-2 hover:border-cyan-400 hover:text-cyan-400 transition hover:duration-200 ease-out hover:ease-in  text-white"><FiTwitter /></span>
                        <span className="h-8 w-14 lg:h-11 lg:w-11 flex justify-center items-center rounded-full shadow-2xl bg-cyan-400 text-lg hover:bg-transparent hover:border-2 hover:border-cyan-400 hover:text-cyan-400 transition hover:duration-200 ease-out hover:ease-in  text-white"><RiTwitterXFill /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;


