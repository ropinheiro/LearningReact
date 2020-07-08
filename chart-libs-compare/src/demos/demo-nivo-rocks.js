import React from 'react'

import ChartsGrid from './charts-grid'

import { ResponsiveBullet } from '@nivo/bullet'
import { ResponsiveLine } from '@nivo/line'
import { ResponsivePie } from '@nivo/pie'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  nivoWrapper: {
    width: '800px',
    height: '500px'
  }
}))

// ============================================================================
// Chart list definition
// ============================================================================

export default function DemoNivoRocks () {
  const demosList = [
    { key: 0, label: 'Line Chart', contents: <DemoLineChart /> },
    { key: 1, label: 'Stacked Area Chart', contents: <DemoStackedAreaChart /> },
    { key: 2, label: 'Pie Chart', contents: <DemoPieChart /> },
    { key: 3, label: 'Bullet Chart', contents: <DemoBulletChart /> },
    { key: 4, label: 'Gantt Chart', contents: <DemoGanttChart /> }
  ]

  return <ChartsGrid title='Nivo Rocks Demo' demosList={demosList} />
}

// ============================================================================
// REMOVE THIS AT THE END
// ============================================================================

function DemoDefault () {
  return <p>TODO: chart here</p>
}

// Nivo Rocks has something I see as a cons. The chart components need the
// parent container to have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered. IMO, the charts
// should be shelf contained and receive properties to work properly no matter
// how the parent is configured.
function NivoWrapper (props) {
  const { children } = props
  const classes = useStyles()
  return <div className={classes.nivoWrapper}>{children}</div>
}

// ============================================================================
// Pie Chart
// ============================================================================

const dataDemoLineChart = [
  {
    id: 'japan',
    color: 'hsl(109, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 86
      },
      {
        x: 'helicopter',
        y: 285
      },
      {
        x: 'boat',
        y: 7
      },
      {
        x: 'train',
        y: 15
      },
      {
        x: 'subway',
        y: 230
      },
      {
        x: 'bus',
        y: 30
      },
      {
        x: 'car',
        y: 255
      },
      {
        x: 'moto',
        y: 268
      },
      {
        x: 'bicycle',
        y: 152
      },
      {
        x: 'horse',
        y: 148
      },
      {
        x: 'skateboard',
        y: 47
      },
      {
        x: 'others',
        y: 33
      }
    ]
  },
  {
    id: 'france',
    color: 'hsl(201, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 76
      },
      {
        x: 'helicopter',
        y: 203
      },
      {
        x: 'boat',
        y: 256
      },
      {
        x: 'train',
        y: 52
      },
      {
        x: 'subway',
        y: 233
      },
      {
        x: 'bus',
        y: 262
      },
      {
        x: 'car',
        y: 36
      },
      {
        x: 'moto',
        y: 198
      },
      {
        x: 'bicycle',
        y: 114
      },
      {
        x: 'horse',
        y: 97
      },
      {
        x: 'skateboard',
        y: 101
      },
      {
        x: 'others',
        y: 200
      }
    ]
  },
  {
    id: 'us',
    color: 'hsl(267, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 52
      },
      {
        x: 'helicopter',
        y: 49
      },
      {
        x: 'boat',
        y: 231
      },
      {
        x: 'train',
        y: 127
      },
      {
        x: 'subway',
        y: 217
      },
      {
        x: 'bus',
        y: 94
      },
      {
        x: 'car',
        y: 190
      },
      {
        x: 'moto',
        y: 71
      },
      {
        x: 'bicycle',
        y: 251
      },
      {
        x: 'horse',
        y: 163
      },
      {
        x: 'skateboard',
        y: 274
      },
      {
        x: 'others',
        y: 127
      }
    ]
  },
  {
    id: 'germany',
    color: 'hsl(270, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 226
      },
      {
        x: 'helicopter',
        y: 225
      },
      {
        x: 'boat',
        y: 170
      },
      {
        x: 'train',
        y: 253
      },
      {
        x: 'subway',
        y: 220
      },
      {
        x: 'bus',
        y: 247
      },
      {
        x: 'car',
        y: 61
      },
      {
        x: 'moto',
        y: 143
      },
      {
        x: 'bicycle',
        y: 6
      },
      {
        x: 'horse',
        y: 37
      },
      {
        x: 'skateboard',
        y: 220
      },
      {
        x: 'others',
        y: 259
      }
    ]
  },
  {
    id: 'norway',
    color: 'hsl(295, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 57
      },
      {
        x: 'helicopter',
        y: 48
      },
      {
        x: 'boat',
        y: 185
      },
      {
        x: 'train',
        y: 102
      },
      {
        x: 'subway',
        y: 270
      },
      {
        x: 'bus',
        y: 123
      },
      {
        x: 'car',
        y: 125
      },
      {
        x: 'moto',
        y: 186
      },
      {
        x: 'bicycle',
        y: 68
      },
      {
        x: 'horse',
        y: 199
      },
      {
        x: 'skateboard',
        y: 66
      },
      {
        x: 'others',
        y: 118
      }
    ]
  }
]

function DemoLineChart () {
  return (
    <NivoWrapper>
      <ResponsiveLine
        data={dataDemoLineChart}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel='y'
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </NivoWrapper>
  )
}

// ============================================================================
// Stacked Area Chart
// ============================================================================

function DemoStackedAreaChart () {
  return (
    <NivoWrapper>
      <DemoDefault />
    </NivoWrapper>
  )
}

// ============================================================================
// Pie Chart
// ============================================================================

const dataDemoPieChart = [
  {
    id: 'javascript',
    label: 'javascript',
    value: 505,
    color: 'hsl(41, 70%, 50%)'
  },
  {
    id: 'sass',
    label: 'sass',
    value: 532,
    color: 'hsl(231, 70%, 50%)'
  },
  {
    id: 'scala',
    label: 'scala',
    value: 154,
    color: 'hsl(134, 70%, 50%)'
  },
  {
    id: 'php',
    label: 'php',
    value: 127,
    color: 'hsl(129, 70%, 50%)'
  },
  {
    id: 'c',
    label: 'c',
    value: 270,
    color: 'hsl(34, 70%, 50%)'
  }
]

function DemoPieChart () {
  return (
    <NivoWrapper>
      <ResponsivePie
        data={dataDemoPieChart}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor='#333333'
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor='#333333'
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'ruby'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'c'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'go'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'python'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'scala'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'lisp'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'elixir'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'javascript'
            },
            id: 'lines'
          }
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
      />
    </NivoWrapper>
  )
}

// ============================================================================
// Bullet Chart
// ============================================================================

const dataDemoBulletChart = [
  {
    id: 'temp.',
    ranges: [26, 49, 66, 0, 120],
    measures: [96],
    markers: [79]
  },
  {
    id: 'power',
    ranges: [
      0.5674877215956196,
      0.06402239260206047,
      0.08151998481530676,
      0,
      2
    ],
    measures: [1.000463342442467, 1.5614103119480536],
    markers: [1.9371675998896394]
  },
  {
    id: 'volume',
    ranges: [15, 18, 6, 28, 9, 19, 0, 40],
    measures: [39],
    markers: [34]
  },
  {
    id: 'cost',
    ranges: [451427, 32554, 444884, 0, 500000],
    measures: [79480, 326074],
    markers: [391800]
  },
  {
    id: 'revenue',
    ranges: [4, 1, 10, 0, 11],
    measures: [2],
    markers: [9.714053638034118, 8.651059127167567]
  }
]

function DemoBulletChart () {
  return (
    <NivoWrapper>
      <ResponsiveBullet
        data={dataDemoBulletChart}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={46}
        titleAlign='start'
        titleOffsetX={-70}
        measureSize={0.2}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
      />
    </NivoWrapper>
  )
}

// ============================================================================
// Gantt Chart
// ============================================================================

function DemoGanttChart () {
  return <NivoWrapper>Nothing available...</NivoWrapper>
}
