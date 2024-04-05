import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <Notifications position="top-right" zIndex={999999999999}/>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
