import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../Provider/AuthProvider";
import toast from 'react-hot-toast';
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase.confige";
import { Helmet } from 'react-helmet-async';


const Register = () => {
    const [toggle, setToggle] = useState(false);
    const { createUser, logOut } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const photo = data.photo;
        const password = data.password;
        // console.log(name, email, photo, password);
        console.log(photo);

        if (password.length < 6) {
            toast.error('password should be at least 6 character or longer');
            return;
        }else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            toast.error('Must have an Uppercase and a Lowercase letter in the password');
            return;
        }

        setEmailError('')

        createUser(email, password)
        .then( () => {
            // console.log(result.user);
            
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo,
            })
            toast.success('Registration successful');
            
            logOut();
            navigate('/login');
        })
        .catch( error => {
            setEmailError(error.message.split('/')[1].replace(').',''))
        })

    }

    return (
        <div className="lg:h-[calc(100vh-386px)] flex items-center my-16 md:my-0">
            <Helmet>
                <title>Hospitality Haven | Register</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="border w-[90%] bg-gradient-to-r from-[rgba(204,204,204,.55)] to-[rgba(230,230,230,.25)] md:w-3/4 lg:w-[30%] mx-auto px-8 py-12  rounded-lg ">
                <div className="space-y-6">
                    <div>
                        <input {...register("name", { required: true })} type="text" name="name" id="name" placeholder="Name" className="border-b-2  w-full outline-0 p-2" />
                        {errors.name && <span className="text-red-400">This field is required</span>}
                    </div>
                    <div>
                        <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="Email" className="border-b-2  w-full outline-0 p-2" />
                        {errors.email && <span className="text-red-400">This field is required</span>}
                        <p className="text-red-400">{emailError}</p>
                    </div>
                    <div>
                        <input {...register("photo", { required: true })} type="text" name="photo" id="photo" placeholder="Photo URl" className="border-b-2  w-full outline-0 p-2" />
                        {errors.email && <span className="text-red-400">This field is required</span>}
                    </div>
                    <div className="relative">
                        <input {...register("password", { required: true })} type={toggle ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="border-b-2  w-full outline-0 p-2" />
                        {errors.password && <span className="text-red-400">This field is required</span>}
                        <span onClick={()=>setToggle(!toggle)} className="text-xl absolute right-2 top-2">{toggle ? <IoEyeOutline /> : <IoEyeOffOutline />}</span>
                    </div>
                    <button href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-400 rounded hover:bg-white group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Button Text</span>
                    </button>
                </div>
                <p className="font-description font-semibold mt-4"> have account Please<Link to='/login' className="underline text-cyan-400 text-xl ml-2 font-bold"> Login</Link></p>
            </form>
        </div>
    );
};

export default Register;