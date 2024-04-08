import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronRight } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const [toggle, setToggle] = useState(false);
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const photo = data.photo;
        const password = data.password;
        console.log(name, email, photo, password);

        createUser(email, password)
        .then( result => {
            console.log(result.user);
        })
        .catch( error => {
            console.error(error);
        })

    }

    return (
        <div className="h-[100vh] flex items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="border md:w-3/4 lg:w-[30%] mx-auto px-8 pt-24 pb-10 rounded-lg ">
                <div className="space-y-10">
                    <div>
                        <input {...register("name", { required: true })} type="text" name="name" id="name" placeholder="Name" className="border-b-2 w-full outline-0 py-1.5" />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div>
                        <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="Email" className="border-b-2 w-full outline-0 py-1.5" />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div>
                        <input {...register("photo")} type="text" name="photo" id="photo" placeholder="Photo URl" className="border-b-2 w-full outline-0 py-1.5" />
                    </div>
                    <div className="relative">
                        <input {...register("password", { required: true })} type={toggle ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="border-b-2 w-full outline-0 py-1.5" />
                        {errors.password && <span>This field is required</span>}
                        <span onClick={()=>setToggle(!toggle)} className="text-xl absolute right-2 top-2">{toggle ? <IoEyeOutline /> : <IoEyeOffOutline />}</span>
                    </div>
                    <button className="text-lg font-bold shadow-2xl md:px-6 md:py-3 rounded-full border-b-4 border-l-4 border-gray-200 flex items-center lg:gap-8">REGISTER NOW <span><FaChevronRight /></span></button>
                </div>
                <p> have account Please<Link to='/login' className="underline text-blue-600 font-semibold"> Login</Link></p>
            </form>
        </div>
    );
};

export default Register;