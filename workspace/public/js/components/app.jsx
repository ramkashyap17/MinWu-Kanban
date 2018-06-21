import Left from './left-component.jsx'
import Right from './right-component.jsx'
import React from 'react';
import { RingLoader } from 'react-spinners';

class App extends React.Component {    

	constructor(){
		super()
		this.state = {            
            "_id": "1",
            "status": "todo",
            "description": "",
            "title": "",
            "__v": 0,
            "tasks": []          
        }
        
	}

    componentDidMount(){        
        
    }

    componentDidUpdate () {
           
    }

	updateSelectedUID(id){
		var that = this	
        $('.sweet-loading').show();
		if(id){
            $.get("http://localhost:4000/api/cards/" + id, function(result, status){
                console.log('This is result: ' + JSON.stringify(result))           
                that.setState(result)                            
                $('.sweet-loading').hide();
            });
        }
        else{
            console.log('Entered inside clear')
            this.setState({            
                "_id": "1",
                "status": "todo",
                "description": "",
                "title": "",
                "__v": 0,
                "tasks": []          
            })
            that.loading = false
        }			
	}

	refreshCardsList(data){
        console.log('Entered refreshCardsList: ' + JSON.stringify(data)) 
        if(data){
            this.setState(data)
        }       		
        else{
            this.setState({            
                "_id": "1",
                "status": "todo",
                "description": "",
                "title": "",
                "__v": 0,
                "tasks": []          
            })
        }
	}

   	render() {
      return (
         <div>
         	<h1>Kanban Board</h1>
            <div className='sweet-loading'>
                <RingLoader color={'#123abc'} loading={true}/>
            </div>
            <Left action={this.updateSelectedUID.bind(this)}/>
            <Right uid={this.state._id} status={this.state.status} title={this.state.title} description={this.state.description} tasks={this.state.tasks} action={this.refreshCardsList.bind(this)} update={this.updateSelectedUID.bind(this)}/>
         </div>
      );
   	}
}

export default App;