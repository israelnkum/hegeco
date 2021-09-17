import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CarouselItem from './crousel-item'
import LoadChart from './load-chart'
export default function HomeCarousel () {
  const settings = {
    dots: true,
    className: 'carousel-home',
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
      <Slider {...settings}>
        <CarouselItem title={'Battery'}/>
        <CarouselItem title={'Utility/Grid'} type={'c-item-warning'}/>
        <CarouselItem title={'Load'} type={'c-item-primary'}>
          <LoadChart/>
        </CarouselItem>
        <CarouselItem/>
        <CarouselItem/>
      </Slider>
  )
}
