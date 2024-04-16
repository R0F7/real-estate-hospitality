import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    }

    const NavLinks = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'border border-cyan-400 text-cyan-400 text-lg' : 'text-[rgba(19,19,19,0.80)] text-lg'}>Home</NavLink></li>
        <li><NavLink to='/booking' className={({ isActive }) => isActive ? 'border border-cyan-400 text-cyan-400 text-lg' : 'text-[rgba(19,19,19,0.80)] text-lg'}>Bookmark</NavLink></li>
        <li><NavLink to='/profile' className={({ isActive }) => isActive ? 'border border-cyan-400 text-cyan-400 text-lg' : 'text-[rgba(19,19,19,0.80)] text-lg'}>Profile</NavLink></li>
        <li><NavLink to='/update-profile' className={({ isActive }) => isActive ? 'border border-cyan-400 text-cyan-400 text-lg' : 'text-[rgba(19,19,19,0.80)] text-lg'}>Update Profile</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'border border-cyan-400 text-cyan-400 text-lg' : 'text-[rgba(19,19,19,0.80)] text-lg'}>Contact</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 border-b-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-50">
                        {NavLinks}
                    </ul>
                </div>
                <a className="text-xl font-bold font-heading">Hospitality <span className='text-cyan-400'>Haven</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex gap-2 items-center'>
                            <div className='w-12 h-12 rounded-full tooltip tooltip-secondary tooltip-bottom' data-tip={user?.displayName || 'Unknown'}>
                                <img className='w-full h-full rounded-full' src={user?.photoURL || 'https://i.ibb.co/51kxBQ8/istockphoto-1327592506-612x612.jpg'} alt="" />
                            </div>
                            <button onClick={handleLogOut} className="btn">Logout</button>
                        </div>
                        :
                        <Link to='/login' className="btn">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;