import React from 'react';
import TaskListItem from './task-listitem.jsx'

class Right extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            status: this.props.status,
            _id: this.props.uid,
            __v: this.props.tasks.length, 
            tasks: this.props.tasks
        }                
    }

    setValues(that){
        $('#card_title').val(that.state.title)
        $('#card_description').val(that.state.description)

        switch(that.state.status){
            case 'todo':
                $("div.dropdown select").val("todo");                
                break;

            case 'done':
                $("div.dropdown select").val("done");
                break;

            case 'in-progress':
                $("div.dropdown select").val("in-progress");
                break;
        }

        if(localStorage.getItem('currentCardID') != '')
            $('#' + localStorage.getItem('currentCardID')).addClass('homeSubmenuItemSelected')

        console.log('This is task count: ' + that.state.__v)        
        console.log('This is tasks: ' + JSON.stringify(that.state.tasks))
    }

    componentWillReceiveProps(nextProps) {
        $('#input_task_name_container').hide()
        this.setState({
            title: nextProps.title,
            description: nextProps.description,
            status: nextProps.status,
            _id: nextProps.uid,
            __v: nextProps.tasks.length, 
            tasks: nextProps.tasks
        });        
    }

    componentDidMount () {
        $('#input_task_name_container').hide()
    }

    componentDidUpdate () {
        
    }

    handleCardTitleOnBlur(event){
        var that = this;
        var _data = {}

        console.log('This is currentCardID: ' + localStorage.getItem('currentCardID'))

        if(localStorage.getItem('currentCardID') != ''){
            _data._id = localStorage.getItem('currentCardID')
            
            _data.title = event.target.value            
            _data.description = this.state.description            
            _data.status = this.state.status                

            $('#card_title').val(event.target.value)
            $('#card_description').val(that.state.description)        

            $.ajax('http://localhost:4000/api/cards/' + _data._id, {
                type: 'put',
                data: JSON.stringify( _data ),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) { 
                    console.log('post data: ' + JSON.stringify(data))
                    that.setState(data)
                    that.props.action(data)
                }
            });

        }
        else{
            console.log('Entered inside add card action')
            var _data = {}

            _data.title = $('#card_title').val()            
            _data.description = $('#card_description').val()
            _data.status = $('#card_status').val()

            $.ajax('http://localhost:4000/api/cards/', {
                type: 'post',
                data: JSON.stringify( _data ),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {                                                                            
                    that.setState(data)
                    console.log('This is data/_id: ' + data._id)
                    localStorage.setItem('currentCardID', data._id)                    
                    that.props.action(data)                                          
                }
            });
        }                        
    }

    handleCardDescriptionOnBlur(event){
        var _data = {}
        var that = this;

        if(localStorage.getItem('currentCardID') != ''){
            _data._id = localStorage.getItem('currentCardID')
            _data.title = this.state.title            
            _data.status = this.state.status
            _data.description = event.target.value            

            $('#card_title').val(this.state.title)
            $('#card_description').val(event.target.value)                     

            $.ajax('http://localhost:4000/api/cards/'+ _data._id, {
                type: 'put',
                data: JSON.stringify( _data ),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) { 
                    console.log('post data: ' + JSON.stringify(data))
                    that.setState(data)
                    that.props.action(data)                    
                }
            });

        }                        
    }  

    handleCardStatusChange(event){
        var that = this;
        var _data = {}

        if(localStorage.getItem('currentCardID') != ''){
            _data._id = localStorage.getItem('currentCardID')
            
            _data.title = this.state.title            
            _data.description = this.state.description            
            _data.status = event.target.value                

            $('#card_title').val(event.target.value)
            $('#card_description').val(that.state.description)        

            $.ajax('http://localhost:4000/api/cards/' + _data._id, {
                type: 'put',
                data: JSON.stringify( _data ),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) { 
                    console.log('post data: ' + JSON.stringify(data))
                    that.setState(data)
                    that.props.action(data)

                    if(localStorage.getItem('currentCardID') != ''){
                        $('#' + localStorage.getItem('currentCardID')).removeClass('homeSubmenuItemSelected')                        
                    }
                }
            });
        }                        
    } 

    handleCardAddTask(event){
        var that = this;
        var _data = {
            "taskname": event.target.value
        }

        if(localStorage.getItem('currentCardID') != ''){
            $.ajax('http://localhost:4000/api/cards/' + localStorage.getItem('currentCardID') + '/tasks', {
                type: 'post',
                data: JSON.stringify( _data ),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) { 
                    console.log('post data: ' + JSON.stringify(data))
                    that.setState(data)
                    that.props.action(data)
                }
            });
        }                        
    }  

    deleteCard(event){
        var that = this;

        if(localStorage.getItem('currentCardID') != ''){
            $.ajax('http://localhost:4000/api/cards/' + localStorage.getItem('currentCardID'), {
                type: 'delete',                
                success: function(data) {                                                                            
                    that.setState({           
                        "_id": "1",
                        "status": "todo",
                        "description": "",
                        "title": "",
                        "__v": 0,
                        "tasks": []          
                    })                    
                    localStorage.setItem('currentCardID', '')                    
                    that.props.action()                                          
                }
            });
        }            
    }

    hideOrShowNewTaskCreator(event){
        $('#input_task_name_container').toggle()
    }  

    render() {
        var that = this; 

        this.setValues(that)       
        
        return (
            <div className ="right">           
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <button onClick={this.deleteCard.bind(this)} className="btn btn-right">DELETE</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <label> Name:</label>
                            <br/>
                            <input className="input-title" id="card_title" type="text" placeholder="Card name" onBlur={this.handleCardTitleOnBlur.bind(this)}></input>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <label> Status: </label>
                            <br/>
                            <div className="dropdown">                                
                                <select onChange={this.handleCardStatusChange.bind(this)} id="card_status">
                                  <option value="todo">Todo</option>
                                  <option value="done">Done</option>
                                  <option value="in-progress">In Progress</option>                                  
                                </select>
                            </div>
                        </div>                  
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <label> Description: </label>
                            <br/>
                            <textarea className="input-title" id="card_description" onBlur={this.handleCardDescriptionOnBlur.bind(this)} placeholder="Enter the description here" ></textarea>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <label> Task List: </label>
                            <button onClick={this.hideOrShowNewTaskCreator.bind(this)} className="btn btn-right">+</button>                        
                        </div>
                    </div>
                    <div id="input_task_name_container" className="row">                        
                        <div className="col-sm-12 col-md-12 col-lg-12">                        
                            <input id="input_task_name" className="input-title" type="text" placeholder="Enter new task here" onBlur={this.handleCardAddTask.bind(this)}></input>
                        </div>                        
                    </div>
                    <br/>
                    {this.state.tasks.map((task, i) => <TaskListItem key = {'t' + i} action={this.props.action} update={this.props.update} name = {task.name} 
                     done = {task.done} tID = {task._id}/>)}
                    <br/>   
                </div>          
            </div>      
        );
    }
}

export default Right;