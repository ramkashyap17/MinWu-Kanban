import React from 'react';
import Done from './done-cards.jsx'
import Todo from './todo-cards.jsx'
import InProgress from './inprogress-cards.jsx'

class Left extends React.Component {
   constructor(props){
      super(props)
   }
   clearForm(){
      if(localStorage.getItem('currentCardID') != ''){
         $('#' + localStorage.getItem('currentCardID')).removeClass('homeSubmenuItemSelected')                        
      }      
      localStorage.setItem('currentCardID', '')
      this.props.action(null)
   }
   render() {
      return (
         <div className="container left">			
            <button className="btn btn-right" onClick={this.clearForm.bind(this)}>CREATE</button>
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