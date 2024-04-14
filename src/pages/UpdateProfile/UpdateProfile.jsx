import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form"
import { auth } from "../../Firebase/firebase.confige";
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';
// import { useEffect } from "react";
// import { useState } from "react";

const UpdateProfile = () => {
    const { profileUpdate, user, setUser, setReload } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const name = data.name;
        const photoUrl = data.photoUrl;

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
            .then(() => {
                const updatedUser = auth.currentUser;
                setUser(updatedUser)
                console.log('update',updatedUser);
                setReload(true);
                toast.success('Update Successfully')
            })
        }
        console.log('ui',user);

    return (
        <div className="lg:h-[calc(100vh-386px)] mx-4 md:mx-auto -mt-5 lg:-mb-0 mb-10 lg:-mt-0 flex justify-center">
            <div className=" w-full md:w-[50%] lg:w-[25%] h-[400px] p-6 text-center flex flex-col justify-center bg-gradient-to-b rounded-lg shadow-lg from-[rgba(204,204,204,.5)] to-[rgba(230,230,230,.35)]">
                <h2 className="font-description font-bold text-2xl mt-3 mb-6 text-cyan-400">Update Profile</h2>
                <div>
                    <div className="flex justify-center mb-2 ">
                        <img className="w-24 h-24 rounded-full border-y-4 border-y-cyan-400" src={user?.photoURL} alt="" />
                    </div>
                    <h4 className="font-description font-bold text-cyan-400">{user?.displayName}</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mb-10 flex flex-col justify-center mt-5">
                    <input type="text" className="border-b-2 p-1.5 outline-none " placeholder="Enter Name" name="name" id="name" {...register("name", { required: true })} />
                    <input type="text" className="border-b-2 mt-2.5 p-1.5 outline-none " placeholder="Enter PhotoURL" name="photoUrl" id="photoUrl" {...register("photoUrl", { required: true })} />
                    <input type="submit" value='Update' className="bg-cyan-500 py-2 mt-6 font-bold text-white" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;