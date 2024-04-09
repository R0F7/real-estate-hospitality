
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide><img className='w-full h-[630px] rounded-xl' src="../../public/image/Charming Coastal Cottage.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[630px] rounded-xl' src="../../public/image/Historic Vineyard Guesthouse.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[630px] rounded-xl' src="../../public/image/Luxury Beachfront Hotel.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[630px] rounded-xl' src="../../public/image/Rustic Wilderness Lodge.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[630px] rounded-xl' src="../../public/image/Secluded Mountain Resort & Spa.webp" alt="" /></SwiperSlide>

      </Swiper>
    </>
  );
}






