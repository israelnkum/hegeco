import React from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types'
export default function CarouselItem (props) {
  const { title, type, children } = props
  return (
      <div>
        <div style={{ padding: 5 }}>
          <Card size={'small'} style={{ height: 150 }} className={`carousel-item ${type}`} title={title}>
            {children}
          </Card>
        </div>
      </div>
  )
}

CarouselItem.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any
}

CarouselItem.defaultProps = {
  title: 'Widget Title',
  type: 'c-item-dark'
}
