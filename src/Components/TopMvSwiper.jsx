import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

export default function TopMvSwiper({ slides = [] }) {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const [count, setCount] = useState({
    now: 1,
    total: slides.length || 0,
  })

  return (
    <div className="top-mv">
      {/* 你的 CSS 定位是吃 .top-mv .slick-arrow */}
      <span ref={prevRef} className="slick-arrow slick-prev" role="button" aria-label="Prev">
        <i>
          <svg>
            <use xlinkHref="#ico-arrow02" />
          </svg>
        </i>
      </span>

      {/* ✅ 關鍵：className 同時帶 slick-slider，讓 .top-mv .slick-slider { z-index:4 } 生效 */}
      <Swiper
        className="js-slider slick-slider"
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        onInit={(swiper) => {
          swiper.navigation.init()
          swiper.navigation.update()
          setCount({ now: swiper.realIndex + 1, total: slides.length })
        }}
        onSlideChange={(swiper) => {
          setCount((c) => ({ ...c, now: swiper.realIndex + 1 }))
        }}
      >
        {slides.map((s, idx) => {
          const isBlank = !!s.targetBlank
          const rel = isBlank ? s.rel || 'noopener' : undefined

          return (
            <SwiperSlide key={idx}>
              <div className="top-mv__item">
                <div className="top-mv__img">
                  <a
                    href={s.href}
                    target={isBlank ? '_blank' : undefined}
                    rel={rel}
                    alt=""
                    data-ttl={s.ttl}
                    data-num={String(s.num ?? idx + 1)}
                  >
                    <picture>
                      <source
                        media="(max-width: 767px)"
                        srcSet={s.spSrc}
                        width={s.spW}
                        height={s.spH}
                      />
                      <img
                        loading="lazy"
                        src={s.pcSrc}
                        alt={s.alt || ''}
                        width={s.pcW}
                        height={s.pcH}
                        decoding="async"
                      />
                    </picture>
                  </a>
                </div>

                <div className="top-mv__txt">
                  <a
                    href={s.href}
                    target={isBlank ? '_blank' : undefined}
                    rel={rel}
                    data-ttl={s.ttl}
                    data-num={String(s.num ?? idx + 1)}
                  >
                    <div
                      className="top-mv__txt--main"
                      dangerouslySetInnerHTML={{ __html: s.mainHtml || '' }}
                    />
                    <div className="top-mv__txt--sub">{s.subText}</div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <span ref={nextRef} className="slick-arrow slick-next" role="button" aria-label="Next">
        <i>
          <svg>
            <use xlinkHref="#ico-arrow02" />
          </svg>
        </i>
      </span>

      {/* ✅ 你的 CSS 也吃 .top-mv .slick-num */}
      <div className="slick-num">
        <span className="now-count">{count.now}</span> /{' '}
        <span className="all-count">{count.total}</span>
      </div>

      <div className="top-mv-scroll">
        <span className="txt">SCROLL</span>
        <div className="bar">
          <span />
        </div>
      </div>
    </div>
  )
}
