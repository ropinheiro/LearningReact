import React from 'react'
import SideMenu from './SideMenu'
import './App.css'

import DemoReactGoogleCharts from './demos/demo-react-google-charts'
import DemoRecharts from './demos/demo-recharts'
import DemoNivoRocks from './demos/demo-nivo-rocks'
import DemoTemplate from './demos/demo-template'

// ============================================================================
// Configure here the demos to be shown.
// To add a new library, copy the DemoTemplate to a new file.
// ============================================================================
const demosList = [
  { key: 0, label: 'Nivo Rocks', contents: <DemoNivoRocks /> },
  { key: 1, label: 'Google Charts', contents: <DemoReactGoogleCharts /> },
  { key: 2, label: 'Recharts', contents: <DemoRecharts /> },
  { key: 3, label: 'Template', contents: <DemoTemplate /> }
]

function App () {
  return <SideMenu demosList={demosList} />
}

export default App
