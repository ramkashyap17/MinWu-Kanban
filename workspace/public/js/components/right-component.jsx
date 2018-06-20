import React from 'react';
import TaskListItem from './task-listitem.jsx'

class Right extends React.Component {
    constructor(props) {
        super(props);                
    }

    componentWillMount () {
                
    }

    updateDatabase(event){
        console.log('This is title: ' + event.target.value)
    }

    setValues(that){
        $('#card_title').val(that.props.title)
        $('#card_description').val(that.props.description)

        switch(that.props.status){
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
    }

    render() {
        var that = this;

        console.log('This is this.props.title: ' + this.props.title)                
        this.setValues(that)
        
        return (
            <div className ="right">           
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <button className="btn btn-right">DELETE</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <label> Name:</label>
                            <br/>
                            <input className="input-title" id="card_title" type="text" placeholder="Card name" onChange={this.updateDatabase.bind(this)}></input>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <label> Status: </label>
                            <br/>
                            <div className="dropdown">                                
                                <select id="card_status">
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
                            <textarea className="input-title" id="card_description"  placeholder="Enter the description here" ></textarea>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <label> Task List: </label>
                            <button className="btn btn-right">+</button>                        
                        </div>
                    </div>
                    <TaskListItem/>                
                    <br/>   
                </div>          
            </div>      
        );
    }
}

export default Right;