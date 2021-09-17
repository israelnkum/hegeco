import React from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types'

function Widget (props) {
  const { color, type, children, title, height } = props
  return (
      <Card size={'small'} bordered={false} className={`widget ${type}`} title={title}
            style={{ borderColor: color, height: height, width: 200, borderRadius: 20, padding: 0, textAlign: 'center' }}>
          {children}
      </Card>
  )
}

Widget.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  height: PropTypes.number
}

Widget.defaultProps = {
  color: 'rgb(178, 216, 230)',
  height: 190
}

export default Widget
