import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'

const App = () => (<BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>)

export default App