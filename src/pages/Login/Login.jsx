import { useContext } from "react";
import { FaChevronRight, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

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
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="lg:h-[calc(100vh-386px)] flex items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="border md:w-3/4 lg:w-[30%] mx-auto px-8 pt-24 pb-10 rounded-lg ">
                <div className="space-y-10">
                    <div>
                        <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="Email" className="border-b-2 w-full outline-0 py-1.5" />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div>
                        <input {...register("password", { required: true })} type="password" name="password" id="password" placeholder="Password" className="border-b-2 w-full outline-0 py-1.5" />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <button className="text-lg font-bold shadow-2xl md:px-6 md:py-3 rounded-full border-b-4 border-l-4 border-gray-200 flex items-center lg:gap-8">LOG IN NOW <span><FaChevronRight /></span></button>
                </div>
                <div className="flex justify-end md:pr-5">
                    <div>
                        <h4 className="text-lg font-bold">log in via</h4>
                        <div className="flex gap-2 mt-4 text-xl">
                            <FaGoogle onClick={handleGoogleLogin} className="border w-10 h-10 p-2 rounded-full hover:bg-black hover:text-white transition-all delay-200" />
                            <FaGithub onClick={handleGithubLogin} className="border w-10 h-10 p-2 rounded-full hover:bg-black hover:text-white transition-all hover:delay-200" />
                        </div>
                    </div>
                </div>
                <p>Do not have account Please<Link to='/register' className="underline text-blue-600 font-semibold"> Register</Link></p>
            </form>
        </div>
    );
};

export default Login;