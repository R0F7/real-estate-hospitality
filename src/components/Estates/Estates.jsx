import PropTypes from 'prop-types';
import EstateCard from '../EstateCard/EstateCard';

const Estates = ({allData}) => {

    return (
        <div className='grid md:grid-cols-2 md:gap-8 my-20'>
            {
                allData.map(data => <EstateCard key={data.id} data = {data}></EstateCard>)
            }
        </div>
    );
};

Estates.propTypes ={
    allData: PropTypes.array,
}

export default Estates;