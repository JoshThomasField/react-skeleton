import React, { Component } from 'react';
import './App.css';
//This is the stuff you need for routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Profile from "./components/pages/profile";
import Timeline from "./components/pages/timeline";

class App extends Component {

    render()
    {
        return (
            //This allows you to specify a route
            //The <Switch> means it will only match one url
            //The exact keyword means the url path has to match exactly
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" render={(routeProps) => (<Login {...routeProps} />)}/>
                        <Route path="/register" render={(routeProps) => (<Register {...routeProps} />)}/>
                        <Route path="/timeline" render={(routeProps) => (<Timeline {...routeProps} />)}/>
                        <Route path="/profile" render={(routeProps) => (<Profile {...routeProps} />)}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
