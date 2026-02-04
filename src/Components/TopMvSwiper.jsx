import { useRef, useState } from 'react'
import { Virtual, Controller, Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'

export default function TopMvSwiper({ slides = [] }) {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  // const slides = Array.from({ length: 10 }).map((el, index) => `Slide ${index + 1}`)
  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)

  return (
    <main className="bg-primary-300 w-100 h-100">
      <div className="w-100 position-relative">
        {/* 圖片輪播-雙向控制標題 */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Virtual, Controller, Autoplay]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          watchSlidesProgress
          slideToClickedSlide
          speed={300}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="px-20"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id ?? index} virtualIndex={index}>
              <img
                className="w-100 mv-img"
                src={`${import.meta.env.BASE_URL}${slide.img.replace(/^\//, '')}`}
                alt={slide.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 標題輪播-雙向控制圖片 */}
        <div
          className="position-relative bg-white w-75 triangle-corner round-8 overflow-hidden"
          style={{ marginTop: '-30px', zIndex: 2 }}
        >
          <Swiper
            spaceBetween={12}
            slidesPerView={1}
            speed={300}
            modules={[Virtual, Controller, Navigation]}
            virtual
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id ?? index} virtualIndex={index} className="p-20">
                <div>
                  <h4 className="mb-8">{slide.title}</h4>
                  <p className="fs-12">{slide.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  )
}
