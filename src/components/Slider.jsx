import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import PropTypes from 'prop-types';

export default function Slider({ allData }) {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl -z-10"
      >

        {
          allData.map((data) => <div key={data.id}>
            <SwiperSlide>

              <div className='h-[300px] md:h-[420px] lg:h-[630px] relative' >
                <div className='flex flex-col justify-center items-center h-full absolute top-0 lg:left-[350px] z-50'>
                  <p className='text-white text-lg md:text-4xl font-bold font-heading md:mb-1.5'>{data.segment_name} for {data.status}</p>
                  <h4 className='text-white text-xl md:text-3xl lg:my-2 font-description mb-2 md:mb-3.5'>{data.estate_title}</h4>
                  <h6 className='text-white w-[80%] lg:w-[70%] text-center text-sm '>{data.short_description}</h6>
                </div>
                <div className='absolute inset-0 bg-[rgba(0,0,0,.5)] to-transparent z-40'></div>
                <img className='w-full h-full rounded-xl z-30' src={data.image} alt="" />
              </div>

            </SwiperSlide>
          </div>
          )
        }

      </Swiper>
    </>
  );
}

Slider.propTypes = {
  allData: PropTypes.array,
}

