import React, { Suspense, useEffect, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Test from './test'
import TestPool from './testPool'

export default function App() {  
  return (
    <Suspense fallback={null}>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Test />
          </Route>
          <Route exact path="/testPool">
            <TestPool />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route>
          <Route path="/section">
            <Section />
          </Route>
          <Route path="/notice">
            <Notice />
          </Route> */}
        </Switch>
      </HashRouter>
    </Suspense>
  )
}
