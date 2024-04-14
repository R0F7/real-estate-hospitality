import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import loaderSpin from '../../public/loader/Animation - 1712722970500.gif';

const PrivetRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(loader){
        return <p className='h-[75vh] flex justify-center items-center'><img src={loaderSpin} alt="" /></p>
    }

    if (user) {
        return children;
    }

    return (
        <div>
            <Navigate to='/login' state={location.pathname}></Navigate>
        </div>
    );
};

PrivetRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivetRoute;