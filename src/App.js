import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import  Home  from './pages/Home'

function App() {
    return(
        <Router>
              <Switch>
                  <Route path='/signin'>
                      <p>I will be the sign in page</p>
                  </Route>
                  <Route path='/signup'>
                      <p>I will be the sign up page</p>
                  </Route>
                  <Route path='/browser'>
                      <p>I will be the browse page</p>
                  </Route>
                  <Route path='/'>
                      <Home />
                  </Route>
              </Switch>
        </Router>
    )
}

export default App