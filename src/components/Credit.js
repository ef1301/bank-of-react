import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Credits extends Component {
    constructor(props){
	super(props)
	this.state = {
	    description: '',
	    amount: ''
	};
    }
    render() {
      return(<div>
      	     <h1>Credits</h1>

	     <div className="navbar">
	     <Link to="/">Home</Link>
             <Link to="/UserProfile">User Profile</Link>
	     <Link to="/Debits">Debits</Link>
	     </div>
	     
      	     </div>);
    }
}

export default Credits;
