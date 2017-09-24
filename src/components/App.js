import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import News from '../containers/News'

import Header from '../components/Header'
import Footer from '../components/Footer'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />    
                    <Switch>
                        <Route path="/news/:id" component={News} />    
                        <Route exact path="/" component={Home} /> 
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App