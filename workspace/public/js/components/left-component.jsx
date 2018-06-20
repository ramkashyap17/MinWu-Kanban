import React from 'react';
import Done from './done-cards.jsx'
import Todo from './todo-cards.jsx'
import InProgress from './inprogress-cards.jsx'

class Left extends React.Component {
   render() {
      return (
         <div className="container left">			
            <button className="btn btn-right" onClick={this.getComponent}>CREATE</button>
            <br/>
            <br/>	
            <Done action={this.props.action}/>  
            <Todo action={this.props.action}/>  
            <InProgress action={this.props.action}/>                                
		</div>
      );
   }
}

export default Left;