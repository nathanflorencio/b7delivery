import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from './styles.module.css';

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}><img src="/tmp/banner1.png" alt="" /></SwiperSlide>
        <SwiperSlide className={styles.slide}><img src="/tmp/banner1.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}