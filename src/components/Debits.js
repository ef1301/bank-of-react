import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Debits extends Component {
    constructor(props){
	super(props)
	this.state = {
	    debits: [],
	    description: '',
	    amount: '',
	    date: ''
	};
    }

    display() {
	console.log(this.props.debits);
	if(this.props.debits.length === 0){
	    return null;
	}
	else {
	    let items = this.props.debits.map( (element) => {
		return (
			<div key={element}>
			<p>Debit Description: {this.props.debits[element].description}</p> <br/>
			<p>Debit amount: {this.props.debits[element].amount}</p> <br/>
			<p>Debit date: {this.props.debits[element].date}</p> <br/>
			</div>
		);
	    });
	    return items;
	}
    }
    
    render() {
	return(
		<div>
		<h1>Debits</h1>
		
		<div className="navbar">
		<Link to="/">Home</Link>
		<Link to="/UserProfile">User Profile</Link>
		<Link to="/Credits">Credits</Link>
		</div>
		
	    {this.display()}
      		</div>);
    }
}

export default Debits;
