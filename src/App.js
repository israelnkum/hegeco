import React from 'react'
import 'antd/dist/antd.css'
import './App.css'
import AppLayout from './components/app-layout'
import { Route, Switch } from 'react-router'
import Finance from './components/finance'
import Dashboard from './components/dashboard'
import Home from './components/home'
function App () {
  return (
        <AppLayout>
              {/* <img src={'/3.jpeg'}/> */}
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/finance'} exact component={Finance}/>
                <Route path={'/dashboard'} exact component={Dashboard}/>
            </Switch>
        </AppLayout>
  )
}

export default App
