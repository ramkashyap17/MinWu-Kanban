import Left from './left-component.jsx'
import Right from './right-component.jsx'
import React from 'react';

class App extends React.Component {
	constructor(){
		super()
		this.state = {            
            "_id": "1",
            "status": "done",
            "description": "...",
            "title": "Loading....",
            "__v": 0,
            "tasks": []          
        }
	}

	updateSelectedUID(id){
		var that = this	
		if(id){
            $.get("http://localhost:4000/api/cards/" + id, function(result, status){
                console.log('This is result: ' + JSON.stringify(result))           
                that.setState(result)            
            });
        }			
	}

	refreshCardsList(data){
        console.log('Entered refreshCardsList: ' + JSON.stringify(data))
		this.setState(data)
	}

   	render() {
      return (
         <div>
         	<h1>Kanban Board</h1>
            <Left action={this.updateSelectedUID.bind(this)}/>
            <Right uid={this.state._id} status={this.state.status} title={this.state.title} description={this.state.description} tasks={this.state.tasks} action={this.refreshCardsList.bind(this)}/>
         </div>
      );
   	}
}

export default App;