import React, { useEffect, useState } from 'react'
/* Imports */
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import { Card, Spin } from 'antd'

/* Chart code */
// Themes begin
am4core.useTheme(am4themesAnimated)
// Themes end
const createPieChart1 = () => {
  return new Promise((resolve, reject) => {
    // Create chart instance
    const chart = am4core.create('pie-chart-div', am4charts.PieChart)
    chart.responsive.enabled = true
    // Add data
    chart.data = [
      {
        country: 'Lithuania',
        litres: 501.9
      }, {
        country: 'Czechia',
        litres: 301.9
      }, {
        country: 'Ireland',
        litres: 201.1
      }, {
        country: 'Germany',
        litres: 165.8
      }, {
        country: 'Australia',
        litres: 139.9
      }, {
        country: 'Austria',
        litres: 128.3
      }, {
        country: 'UK',
        litres: 99
      }
    ]

    // Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries())
    pieSeries.dataFields.value = 'litres'
    pieSeries.dataFields.category = 'country'
    pieSeries.slices.template.stroke = am4core.color('#fff')
    pieSeries.slices.template.strokeOpacity = 1

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1
    pieSeries.hiddenState.properties.endAngle = -90
    pieSeries.hiddenState.properties.startAngle = -90

    chart.hiddenState.properties.radius = am4core.percent(0)
    resolve()
  }).catch((err) => {
    console.log(err)
  })
}

function PieChart () {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    createPieChart1().then(() => {
      setLoading(false)
    })
  }, [])
  return (
      <Spin spinning={loading}>
        <Card style={{ borderRadius: 20 }}>
          <div id={'pie-chart-div'} style={{ height: 400 }}/>
        </Card>
      </Spin>
  )
}

export default PieChart
