import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form"
import { auth } from "../../Firebase/firebase.confige";
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';
import { FaRegCircleCheck } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';



const UpdateProfile = () => {
    const { user, setUser, setReload } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const name = data.name;
        const photoUrl = data.photoUrl;

        // updateProfile(auth.currentUser, {
        //     displayName: name,
        //     photoURL: photoUrl
        // })
        //     .then(() => {
        //         const updatedUser = auth.currentUser;
        //         setUser(updatedUser);

        //         //solution 1
        //         setReload(prevState => !prevState);
        //         toast.success('Update Successfully');
        //         document.getElementById('my_modal_1').showModal()

        //         //solution 2
        //         // setReload(false); 
        //         // setTimeout(()=>{
        //         // setReload(true)
        //         // },100)

        //     })

        //     .catch((error) => {
        //         console.log(error);
        //     })


        if (name) {
            updateProfile(auth.currentUser, {
                displayName: name,
            })
                .then(() => {
                    const updatedUser = auth.currentUser;
                    setUser(updatedUser);
    
                    //solution 1
                    setReload(prevState => !prevState);
                    toast.success('Update Successfully');
                    document.getElementById('my_modal_1').showModal()
    
                    //solution 2
                    // setReload(false); 
                    // setTimeout(()=>{
                    // setReload(true)
                    // },100)
    
                })
    
                .catch((error) => {
                    console.log(error);
                })
        }

        if(photoUrl){
            updateProfile(auth.currentUser, {
                photoURL: photoUrl
            })
                .then(() => {
                    const updatedUser = auth.currentUser;
                    setUser(updatedUser);
    
                    //solution 1
                    setReload(prevState => !prevState);
                    toast.success('Update Successfully');
                    document.getElementById('my_modal_1').showModal()
    
                    //solution 2
                    // setReload(false); 
                    // setTimeout(()=>{
                    // setReload(true)
                    // },100)
    
                })
    
                .catch((error) => {
                    console.log(error);
                })
        }

    }
    // console.log('ui', user );

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
        
        <>
            <Helmet>
                <title>Hospitality Haven | UpdateProfile</title>
            </Helmet>
            <div className="lg:h-[calc(100vh-386px)] mx-4 md:mx-auto mb-10 lg:-mt-0 flex justify-center" data-aos="flip-right">
                <div className=" w-full md:w-[50%] lg:w-[25%] h-[420px] p-6 text-center flex flex-col justify-center bg-gradient-to-b rounded-lg shadow-lg from-[rgba(204,204,204,.5)] to-[rgba(230,230,230,.35)]">
                    <h2 className="font-description font-bold text-2xl mt-6 mb-6 text-cyan-400">Update Profile</h2>
                    <div>

                        {/* <div className="flex justify-center mb-2 ">
                            <img className="w-24 h-24 rounded-full border-y-4 border-y-cyan-400 " src={user?.photoURL} alt="" />
                        </div> */}

                        <div className=" w-28 h-28 flex items-center justify-center mx-auto rounded-full border-[7px] border-y-cyan-400 p-3 border-x-0 mb-4">
                            <div className="flex items-center w-[85px] h-[88px]"> <img className="h-full w-full rounded-full" src={user && user.photoURL || 'https://i.ibb.co/51kxBQ8/istockphoto-1327592506-612x612.jpg'} alt="User" /></div>
                        </div>

                        <h4 className="font-description font-bold text-cyan-400">{user?.displayName}</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mb-10 flex flex-col justify-center mt-5">
                        <input type="text" className="border-b-2 p-1.5 outline-none " placeholder="Enter Name" name="name" id="name" {...register("name", { required: false })} />
                        <input type="text" className="border-b-2 mt-2.5 p-1.5 outline-none " placeholder="Enter PhotoURL" name="photoUrl" id="photoUrl" {...register("photoUrl", { required: false })} />
                        <input type="submit" value='Update' className="bg-cyan-500 py-2 mt-6 font-bold text-white" />
                    </form>
                </div>
            </div>

            {/* modal */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col justify-center items-center">
                    <span className="text-5xl text-cyan-400 mb-6"><FaRegCircleCheck></FaRegCircleCheck></span>
                    <h3 className="font-bold text-lg mb-2 text-cyan-400 font-description">update profile successful</h3>
                    <p className="">You have successfully update your profile</p>
                    <div className="modal-action justify-center">
                        <form method="dialog">
                            <button className="btn bg-cyan-400 text-white font-medium">Okay</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </>
    );
};

export default UpdateProfile;