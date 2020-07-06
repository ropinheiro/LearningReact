import React, { PureComponent } from 'react'

import {
  Area,
  AreaChart,
  Bar,
  Legend,
  Line,
  LineChart,
  CartesianGrid,
  ComposedChart,
  Pie,
  PieChart,
  ReferenceArea,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import ChartsGrid from './charts-grid'

export default function DemoRecharts () {
  const demosList = [
    { key: 0, label: 'Line Chart', contents: <DemoLineChart /> },
    { key: 1, label: 'Stacked Area Chart', contents: <DemoStackedAreaChart /> },
    { key: 2, label: 'Pie Chart', contents: <DemoPieChart /> },
    {
      key: 3,
      label: 'Bullet Chart (almost...)',
      contents: <DemoBulletChart />
    },
    { key: 4, label: 'Gantt Chart', contents: <DemoGanttChart /> }
  ]

  return <ChartsGrid title='Recharts Demo' demosList={demosList} />
}

// ============================================================================
// Line Chart
// ============================================================================

const dataDemoLineChart = [
  { name: 1, cost: 4.11, impression: 100 },
  { name: 2, cost: 2.39, impression: 120 },
  { name: 3, cost: 1.37, impression: 150 },
  { name: 4, cost: 1.16, impression: 180 },
  { name: 5, cost: 2.29, impression: 200 },
  { name: 6, cost: 3, impression: 499 },
  { name: 7, cost: 0.53, impression: 50 },
  { name: 8, cost: 2.52, impression: 100 },
  { name: 9, cost: 1.79, impression: 200 },
  { name: 10, cost: 2.94, impression: 222 },
  { name: 11, cost: 4.3, impression: 210 },
  { name: 12, cost: 4.41, impression: 300 },
  { name: 13, cost: 2.1, impression: 50 },
  { name: 14, cost: 8, impression: 190 },
  { name: 15, cost: 0, impression: 300 },
  { name: 16, cost: 9, impression: 400 },
  { name: 17, cost: 3, impression: 200 },
  { name: 18, cost: 2, impression: 50 },
  { name: 19, cost: 3, impression: 100 },
  { name: 20, cost: 7, impression: 100 }
]

const getAxisYDomainDemoLineChart = (from, to, ref, offset) => {
  const refData = dataDemoLineChart.slice(from - 1, to)
  let [bottom, top] = [refData[0][ref], refData[0][ref]]
  refData.forEach(d => {
    if (d[ref] > top) top = d[ref]
    if (d[ref] < bottom) bottom = d[ref]
  })

  return [(bottom | 0) - offset, (top | 0) + offset]
}

const initialStateDemoLineChart = {
  dataDemoLineChart,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  top2: 'dataMax+20',
  bottom2: 'dataMin-20',
  animation: true
}

class DemoLineChart extends PureComponent {
  constructor (props) {
    super(props)
    this.state = initialStateDemoLineChart
  }

  zoom () {
    let { refAreaLeft, refAreaRight, dataDemoLineChart } = this.state

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      this.setState(() => ({
        refAreaLeft: '',
        refAreaRight: ''
      }))
      return
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft]

    // yAxis domain
    const [bottom, top] = getAxisYDomainDemoLineChart(
      refAreaLeft,
      refAreaRight,
      'cost',
      1
    )
    const [bottom2, top2] = getAxisYDomainDemoLineChart(
      refAreaLeft,
      refAreaRight,
      'impression',
      50
    )

    this.setState(() => ({
      refAreaLeft: '',
      refAreaRight: '',
      data: dataDemoLineChart.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      bottom2,
      top2
    }))
  }

  zoomOut () {
    const { dataDemoLineChart } = this.state
    this.setState(() => ({
      data: dataDemoLineChart.slice(),
      refAreaLeft: '',
      refAreaRight: '',
      left: 'dataMin',
      right: 'dataMax',
      top: 'dataMax+1',
      bottom: 'dataMin',
      top2: 'dataMax+50',
      bottom2: 'dataMin+50'
    }))
  }

  render () {
    const {
      dataDemoLineChart,
      left,
      right,
      refAreaLeft,
      refAreaRight,
      top,
      bottom,
      top2,
      bottom2
    } = this.state

    return (
      <div className='highlight-bar-charts' style={{ userSelect: 'none' }}>
        <button
          // href="javascript: void(0);"
          className='btn update'
          onClick={this.zoomOut.bind(this)}
        >
          Zoom Out
        </button>

        <LineChart
          width={570}
          height={285}
          data={dataDemoLineChart}
          onMouseDown={e => this.setState({ refAreaLeft: e.activeLabel })}
          onMouseMove={e =>
            this.state.refAreaLeft &&
            this.setState({ refAreaRight: e.activeLabel })
          }
          onMouseUp={this.zoom.bind(this)}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            allowDataOverflow
            dataKey='name'
            domain={[left, right]}
            type='number'
          />
          <YAxis
            allowDataOverflow
            domain={[bottom, top]}
            type='number'
            yAxisId='1'
          />
          <YAxis
            orientation='right'
            allowDataOverflow
            domain={[bottom2, top2]}
            type='number'
            yAxisId='2'
          />
          <Tooltip />
          <Line
            yAxisId='1'
            type='natural'
            dataKey='cost'
            stroke='#8884d8'
            animationDuration={300}
          />
          <Line
            yAxisId='2'
            type='natural'
            dataKey='impression'
            stroke='#82ca9d'
            animationDuration={300}
          />

          {refAreaLeft && refAreaRight ? (
            <ReferenceArea
              yAxisId='1'
              x1={refAreaLeft}
              x2={refAreaRight}
              strokeOpacity={0.3}
            />
          ) : null}
        </LineChart>
      </div>
    )
  }
}

// ============================================================================
// Stacked Area Chart
// ============================================================================

const dataDemoStackedAreaChart = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]

class DemoStackedAreaChart extends PureComponent {
  render () {
    return (
      <AreaChart
        width={570}
        height={309}
        data={dataDemoStackedAreaChart}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='uv'
          stackId='1'
          stroke='#8884d8'
          fill='#8884d8'
        />
        <Area
          type='monotone'
          dataKey='pv'
          stackId='1'
          stroke='#82ca9d'
          fill='#82ca9d'
        />
        <Area
          type='monotone'
          dataKey='amt'
          stackId='1'
          stroke='#ffc658'
          fill='#ffc658'
        />
      </AreaChart>
    )
  }
}

// ============================================================================
// Pie Chart
// ============================================================================

const data01DemoPieChart = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 }
]

const data02DemoPieChart = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 }
]

class DemoPieChart extends PureComponent {
  render () {
    return (
      <PieChart width={400} height={400}>
        <Pie
          dataKey='value'
          isAnimationActive={false}
          data={data01DemoPieChart}
          cx={200}
          cy={200}
          outerRadius={80}
          fill='#8884d8'
          label
        />
        <Pie
          dataKey='value'
          data={data02DemoPieChart}
          cx={500}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill='#82ca9d'
        />
        <Tooltip />
      </PieChart>
    )
  }
}

// ============================================================================
// Bullet Chart
// ============================================================================

const dataDemoBulletChart = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700
  }
]

class DemoBulletChart extends PureComponent {
  render () {
    return (
      <ComposedChart
        layout='vertical'
        width={500}
        height={400}
        data={dataDemoBulletChart}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke='#f5f5f5' />
        <XAxis type='number' />
        <YAxis dataKey='name' type='category' />
        <Tooltip />
        <Legend />
        <Bar dataKey='pv' fill='#8884d8' barSize={10} stackId='stack' />
        <Bar dataKey='uv' fill='#82ca9d' barSize={20} stackId='stack' />
        <Line dataKey='amt' stroke='#ff7300' />
      </ComposedChart>
    )
  }
}

// ============================================================================
// Gantt Chart
// ============================================================================

function DemoGanttChart () {
  return <p>Nothing available...</p>
}
