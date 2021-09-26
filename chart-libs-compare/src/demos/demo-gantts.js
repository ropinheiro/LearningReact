import React from 'react'

import ChartsGrid from './charts-grid'

import { Chart as ReactGoogleChart } from 'react-google-charts'

// ============================================================================
// Chart list definition
// ============================================================================

export default function DemoGantts () {
  const demosList = [
    {
      key: 0,
      label: 'Library: React Google Charts',
      contents: <DemoReactGoogleCharts />
    }
  ]

  return <ChartsGrid title='Gantt Charts Demos' demosList={demosList} />
}

// ============================================================================
// React Google Charts
// ============================================================================

function DemoReactGoogleCharts () {
  return (
    <ReactGoogleChart
      width={'800px'}
      height={'400px'}
      chartType='Gantt'
      loader={<div>Loading Chart</div>}
      data={[
        [
          { type: 'string', label: 'Task ID' },
          { type: 'string', label: 'Task Name' },
          { type: 'string', label: 'Resource' },
          { type: 'date', label: 'Start Date' },
          { type: 'date', label: 'End Date' },
          { type: 'number', label: 'Duration' },
          { type: 'number', label: 'Percent Complete' },
          { type: 'string', label: 'Dependencies' }
        ],
        [
          'Research',
          'Find sources',
          null,
          new Date(2015, 1, 1),
          new Date(2015, 1, 5),
          null,
          100,
          null
        ],
        [
          'Write',
          'Write paper',
          'write',
          null,
          new Date(2015, 1, 9),
          3 * 24 * 60 * 60 * 1000,
          25,
          'Research,Outline'
        ],
        [
          'Cite',
          'Create bibliography',
          'write',
          null,
          new Date(2015, 1, 7),
          1 * 24 * 60 * 60 * 1000,
          20,
          'Research'
        ],
        [
          'Complete',
          'Hand in paper',
          'complete',
          null,
          new Date(2015, 1, 10),
          1 * 24 * 60 * 60 * 1000,
          0,
          'Cite,Write'
        ],
        [
          'Outline',
          'Outline paper',
          'write',
          null,
          new Date(2015, 1, 6),
          1 * 24 * 60 * 60 * 1000,
          100,
          'Research'
        ]
      ]}
      options={{
        gantt: {
          criticalPathEnabled: false, // Critical path arrows will be the same as other arrows.
          arrow: {
            angle: 100,
            width: 5,
            color: 'green',
            radius: 0
          }
        }
      }}
      rootProps={{ 'data-testid': '6' }}
    />
  )
}
