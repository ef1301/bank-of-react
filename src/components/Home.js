import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
      console.log(this.props.accountBalance)
      return(<div>
      		  <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
      		  <h1>Bank of React</h1>
            <Link to="/UserProfile">User Profile</Link>
      		  <AccountBalance accountBalance={this.props.accountBalance}/>
      		</div>);
    }
}

export default Home;
