import React, { useEffect, useState } from 'react'
import { Card, Spin } from 'antd'
/* Imports */
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesKelly from '@amcharts/amcharts4/themes/kelly'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import { reject } from 'eslint-plugin-promise/rules/lib/promise-statics'

/* Chart code */
// Themes begin
am4core.useTheme(am4themesKelly)
am4core.useTheme(am4themesAnimated)

const createPieChart1 = () => {
  return new Promise((resolve, reject) => {
    // Create chart instance
    const chart = am4core.create('pie-chart-1', am4charts.PieChart)
    chart.legend = new am4charts.Legend()
    chart.legend.position = 'right'
    // Add data
    chart.data = [{
      sector: '',
      size: '26.9kw'
    }, {
      sector: '',
      size: '73.1kw'
    }]

    // Add label
    chart.innerRadius = 70
    const label = chart.seriesContainer.createChild(am4core.Label)
    label.text = '24h'
    label.horizontalCenter = 'middle'
    label.verticalCenter = 'middle'
    label.fontSize = 36
    // label.fill('rgba(168, 168, 168, 0.85)')
    label.fontWeight = 'bold'
    // chart.legend.valueLabels.template.disabled = true
    // Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries())
    pieSeries.dataFields.value = 'size'
    pieSeries.dataFields.category = 'sector'
    pieSeries.labels.template.disabled = true
    pieSeries.ticks.template.disabled = true
    pieSeries.colors.list = [
      am4core.color('rgb(125, 194, 227)'),
      am4core.color('rgb(251, 164, 23)')
    ]
    resolve()
  }).catch((err) => {
    console.log(err)
  })
}
function PieChart1 () {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    createPieChart1().then(() => {
      setLoading(false)
    })
  }, [])
  return (
        <Spin spinning={loading}>
            <Card style={{ borderRadius: 20 }}>
                <div id={'pie-chart-1'} style={{ height: 250 }}/>
            </Card>
        </Spin>
  )
}

export default PieChart1
