import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Debits extends Component {
    constructor(props){
	super(props)
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
			<p>Debit Description: {element.description}</p> <br/>
			<p>Debit amount: {element.amount}</p> <br/>
			<p>Debit date: {element.date}</p> <br/>
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
