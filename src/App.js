import React from 'react'

import { Switch, Route } from 'react-router-dom'

import BForm from './components/Form'

function App () {
  return (
    <Switch>
      <Route path={'/'} component={BForm} />
    </Switch>
  )
}

export default App
