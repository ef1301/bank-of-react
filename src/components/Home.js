import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
      console.log(this.props.accountBalance)
      return(<div>
      	     <h1>Bank of React</h1>
	     
	     <div className="navbar">
             <Link to="/UserProfile">User Profile</Link>
	     <Link to="/Debits">Debits</Link>
	     <Link to="/Credits">Credits</Link>
	     </div>
	     <br/>
      	     <AccountBalance accountBalance={this.props.accountBalance}/>
      	     </div>);
    }
}

export default Home;
