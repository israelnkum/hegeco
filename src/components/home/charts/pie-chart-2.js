import React, { useEffect, useState } from 'react'
import { Card, Select, Spin } from 'antd'
/* Imports */
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesKelly from '@amcharts/amcharts4/themes/kelly'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'

/* Chart code */
// Themes begin
am4core.useTheme(am4themesKelly)
am4core.useTheme(am4themesAnimated)

const createPieChart2 = () => {
  return new Promise((resolve, reject) => {
    // Create chart instance
    const chart = am4core.create('pie-chart-2', am4charts.PieChart)
    chart.legend = new am4charts.Legend()
    chart.legend.position = 'right'
    // Add data
    chart.data = [{
      sector: '',
      size: '100kw'
    }]

    // Add label
    chart.innerRadius = 70
    const label = chart.seriesContainer.createChild(am4core.Label)
    label.text = '7days'
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
      am4core.color('rgb(125, 194, 227)')
    ]

    resolve()
  }).catch((err) => {
    console.log(err)
  })
}

function PieChart2 () {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    createPieChart2().then(() => {
      setLoading(false)
    })
  }, [])
  return (
        <Spin spinning={loading}>
            <Card style={{ borderRadius: 20 }}>
                <div id={'pie-chart-2'} style={{ height: 250 }}/>
            </Card>
        </Spin>
  )
}

export default PieChart2
