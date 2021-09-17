import React from 'react'
import { Table, Typography } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
const { Column } = Table

function Data (props) {
  const { dataToDisplay, showClose } = props
  return (
        <div className={'today-data-wrapper'}>
            {
                dataToDisplay.map((data) => {
                  return <div key={'2'} className={'today-data'}>
                      {
                          showClose &&
                          <div align={'right'}>
                              <CloseOutlined style={{ fontSize: 10 }}/>
                          </div>
                      }
                        <Table size={'small'} pagination={false} key={'key'} bordered={false} dataSource={data} showHeader={false}>
                            <Column title="" key="address" render={(text, record) => (
                                <Typography.Text strong>
                                    {record.text}
                                </Typography.Text>
                            )} />
                            <Column title="" key="address" render={(text, record) => (
                                <div align={'right'}>
                                    {record.value}
                                </div>
                            )} />
                        </Table>
                    </div>
                })
            }
        </div>
  )
}
export default Data

Data.propTypes = {
  dataToDisplay: PropTypes.array,
  showClose: PropTypes.bool
}

Data.defaultProps = {
  showClose: false
}
