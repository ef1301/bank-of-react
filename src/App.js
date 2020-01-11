import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import './App.css';

class App extends Component {
    constructor() {
	super();
	this.state = {
	    accountBalance: 14568.27
	}
    }
    render() {
	
	const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
	
	return (
		<Router>
		<div>
		<Route exact path="/" render={HomeComponent}/>
		</div>
		</Router>
	);
    }
}

export default App;
