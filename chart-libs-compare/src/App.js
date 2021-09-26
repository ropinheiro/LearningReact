import React from 'react'
import SideMenu from './SideMenu'
import './App.css'

import DemoGantts from './demos/demo-gantts'
import DemoNivoRocks from './demos/demo-nivo-rocks'
import DemoReactGoogleCharts from './demos/demo-react-google-charts'
import DemoReactVis from './demos/demo-react-vis'
import DemoRecharts from './demos/demo-recharts'
import DemoTemplate from './demos/demo-template'

// ============================================================================
// Configure here the demos to be shown.
// To add a new library, copy the DemoTemplate to a new file.
// ============================================================================
const demosList = [
  { key: 0, label: 'Gantt Demos', contents: <DemoGantts /> },
  { key: 1, label: 'React Vis', contents: <DemoReactVis /> },
  { key: 2, label: 'Nivo Rocks', contents: <DemoNivoRocks /> },
  { key: 3, label: 'Google Charts', contents: <DemoReactGoogleCharts /> },
  { key: 4, label: 'Recharts', contents: <DemoRecharts /> },
  { key: 5, label: 'Template', contents: <DemoTemplate /> }
]

function App () {
  return <SideMenu demosList={demosList} />
}

export default App
