import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Credits extends Component {
    constructor(props){
	super(props)
    }
    display() {
	if(this.props.credits.length === 0){
	    return null;
	}
	else {
	    let items = this.props.credits.map( (element) => {
		return (
			<div key={element}>
			<p>Credit Description: {element.description}</p> <br/>
			<p>Credit amount: {element.amount}</p> <br/>
			<p>Credit date: {element.date}</p> <br/>
			</div>
		);
	    });
	    return items;
	}
    }
    render() {
      return(<div>
      	     <h1>Credits</h1>

	     <div className="navbar">
	     <Link to="/">Home</Link>
             <Link to="/UserProfile">User Profile</Link>
	     <Link to="/Debits">Debits</Link>
	     </div>
          {this.display()}
      	     </div>);
    }
}

export default Credits;
