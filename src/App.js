import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debits from './components/Debits';
import Credits from './components/Credit';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
  	super();
  	this.state = {
        currentUser: {
          userName: 'bob_loblaw',
          memberSince: '08/23/99',
          credit:0,
          debit:0
        },
        debits:[],
        credits:[]
  	}
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  accountBalance = () => {
    let creditTotal = 0
      let debitTotal = 0
    for(let i = 0; i < this.state.credits.length; i++){
      creditTotal += this.state.credits[i].amount
    }
    for(let i = 0; i < this.state.debits.length; i++){
      debitTotal += this.state.debits[i].amount
    }
    return creditTotal - debitTotal
  }

  async componentDidMount(){
    const debitEndpoint = 'https://moj-api.herokuapp.com/debits'
    const creditEndpoint = 'https://moj-api.herokuapp.com/credits'
    const debits = await axios.get(debitEndpoint)
    const credits = await axios.get(creditEndpoint)
    this.setState({debits:debits.data, credits:credits.data})
  }

    render() {
	const HomeComponent = () => (<Home accountBalance={this.accountBalance()}/>);
	const UserProfileComponent = () => (
		<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>
	);
	const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);
	const DebitsComponent = () => (<Debits accountBalance={this.accountBalance()} debits={this.state.debits}/>);
	const CreditsComponent = () => (<Credits accountBalance={this.accountBalance()} credits={this.state.credits}/>);
	return (
  		<Router>
    		<div>
      		<Route exact path="/" render={HomeComponent}/>
		<Route exact path="/UserProfile" render={UserProfileComponent}/>
		<Route exact path="/login" render={LogInComponent}/>
		<Route exact path="/Debits" render={DebitsComponent}/>
		<Route exact path="/Credits" render={CreditsComponent}/>
    		</div>
  		</Router>
      );
  }
}

export default App;
