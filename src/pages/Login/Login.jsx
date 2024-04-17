import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        // console.log( email, password );

        loginUser(email, password)
            .then(() => {
                toast.success('log in successfully');
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                toast.error("Incorrect email or password")
            })

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success('log in successfully');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(() => {
                toast.success('log in successfully');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {.0
                console.error(error);
            })
    }

    return (
        <div className="lg:h-[calc(100vh-386px)] mb-8 lg:mb-0 flex items-center">
            <Helmet>
                <title>Hospitality Haven | Login </title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="border bg-gradient-to-r from-[rgba(204,204,204,.55)] to-[rgba(230,230,230,.25)] w-[90%] md:w-3/4 lg:w-[30%] mx-auto px-8 pt-24 pb-10 rounded-lg ">
                <div className="space-y-10">
                    <div>
                        <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="Email" className="border-b-2 w-full outline-0 p-2 shadow" />
                        {errors.name && <span className="text-red-300">This field is required</span>}
                    </div>
                    <div>
                        <input {...register("password", { required: true })} type="password" name="password" id="password" placeholder="Password" className="border-b-2 w-full outline-0 p-2 shadow" />
                        {errors.password && <span className="text-red-400">This field is required</span>}
                    </div>
                    <button href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-400 rounded hover:bg-white group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Button Text</span>
                    </button>

                </div>
                <div className="flex justify-end md:pr-5">
                    <div>
                        <h4 className="text-lg uppercase font-bold text-cyan-400">log in via</h4>
                        <div className="flex gap-2 mt-3 text-xl">
                            <FaGoogle onClick={handleGoogleLogin} className="border border-cyan-400 w-10 h-10 p-2 rounded-full hover:bg-cyan-400 text-cyan-400 hover:text-white transition-all delay-200" />
                            <FaGithub onClick={handleGithubLogin} className="border border-cyan-400 w-10 h-10 p-2 rounded-full hover:bg-cyan-400 text-cyan-400 hover:text-white transition-all hover:delay-200" />
                        </div>
                    </div>
                </div>
                <p className="font-description font-semibold mt-4">Do not have account Please<Link to='/register' className="ml-2 underline text-cyan-400 text-xl font-semibold"> Register</Link></p>
            </form>
        </div>
    );
};

export default Login;