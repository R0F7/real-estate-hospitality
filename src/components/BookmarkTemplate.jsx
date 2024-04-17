import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookingTemplate = ({ data, handleRemove }) => {
    const { id, segment_name, estate_title, status, image } = data;
    console.log(data);

    return (
        <div>
            <div  className="p-5 mx-auto sm:p-10 md:p-16  text-gray-100 dark:text-gray-800 border shadow mb-5">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded border shadow-lg">
                    <img src={image} alt="" className="w-full h-60 sm:h-96 bg-gray-500 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900 dark:bg-gray-50 shadow">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-description text-cyan-400 font-semibold sm:text-3xl">{estate_title}</a>
                            <p className='text-2xl font-bold uppercase font-description text-cyan-500 opacity-75'>{status}</p>
                        </div>
                        <div className="text-gray-100 dark:text-gray-800 flex justify-between">
                            <p className="text-2xl font-bold text-cyan-500 opacity-75">{segment_name}</p>
                            <div className='flex gap-3'>
                                <Link to={`/estate/${id}`} className='btn bg-cyan-400 text-white'>View Details</Link>
                                <button onClick={() => handleRemove(data)} className='btn bg-cyan-400 text-white'>Remove Bookmark</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

BookingTemplate.propTypes = {
    data: PropTypes.object,
    handleRemove: PropTypes.func,
}

export default BookingTemplate;