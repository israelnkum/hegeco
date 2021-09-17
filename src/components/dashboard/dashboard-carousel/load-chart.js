import React, { useEffect, useState } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'

/* Chart code */
// Themes begin
am4core.useTheme(am4themesAnimated)
// Themes end

// Create chart instance
const chart = am4core.create('load-data-div', am4charts.XYChart)

// Enable chart cursor
chart.cursor = new am4charts.XYCursor()
chart.cursor.lineX.disabled = true
chart.cursor.lineY.disabled = true

chart.zoomOutButton.disabled = true
// Add data
chart.data = [{
  date: '2012-01-01',
  value: 8
}, {
  date: '2012-01-02',
  value: 10
}, {
  date: '2012-01-03',
  value: 12
}, {
  date: '2012-01-04',
  value: 14
}
]

// Create axes
const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
dateAxis.renderer.grid.template.location = 0.5
dateAxis.dateFormatter.inputDateFormat = 'yyyy-MM-dd'
dateAxis.renderer.minGridDistance = 40
dateAxis.tooltipDateFormat = 'MMM dd, yyyy'
dateAxis.dateFormats.setKey('day', 'dd')
dateAxis.cursorTooltipEnabled = false
const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
valueAxis.cursorTooltipEnabled = false
// Create series
const series = chart.series.push(new am4charts.LineSeries())
series.tooltipText = '{date}\n[bold font-size: 17px]value: {valueY}[/]'
series.dataFields.valueY = 'value'
series.dataFields.dateX = 'date'
series.strokeDasharray = 3
series.strokeWidth = 2
series.strokeOpacity = 0.3
series.strokeDasharray = '3,3'

const bullet = series.bullets.push(new am4charts.CircleBullet())
bullet.strokeWidth = 2
bullet.stroke = am4core.color('#fff')
bullet.setStateOnChildren = true
bullet.propertyFields.fillOpacity = 'opacity'
bullet.propertyFields.strokeOpacity = 'opacity'

const hoverState = bullet.states.create('hover')
hoverState.properties.scale = 1.7

function LoadChart () {
  const [loading, setLoading] = useState(true)

  return (
      <div id={'load-data-div'} style={{ height: 100 }}/>
  )
}

export default LoadChart
