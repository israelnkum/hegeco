import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Tag, Typography } from 'antd'
import Widget from '../../widget'
export default function DashboardCarousel () {
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
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  }
  return (
      <Slider {...settings}>
        <div>
          <div style={{ padding: '0 0 15px' }}>
            <Widget height={150} title={'PV'} type={'pv'}>
              <Typography.Title level={3} style={{ color: '#ffffff' }}>
                190.4 kW
              </Typography.Title>
            </Widget>
          </div>
        </div>
        <div>
          <div style={{ padding: '0 15px 15px' }}>
            <Widget height={150} title={'Utility/Grid'} type={'utility'}>
              <Typography.Title level={3} style={{ color: '#ffffff', margin: 0, marginBottom: 20 }}>
                190.4 kW
              </Typography.Title >
              <Tag color={'rgba(0,0,0,0.1)'}>-0.4 kW</Tag>
            </Widget>
          </div>
        </div>
        <div>
          <div style={{ padding: '0 32px 15px' }}>
            <Widget height={150} title={'Battery'} type={'battery'}>
              <Typography.Title level={3} style={{ color: '#ffffff', margin: 0, marginBottom: 20 }}>
                190.4 kW
              </Typography.Title >
              <Tag color={'rgba(0,0,0,0.1)'}>-0.4 kW</Tag>
            </Widget>
          </div>
        </div>
      </Slider>
  )
}
