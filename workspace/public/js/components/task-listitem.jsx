import React from 'react';

class TaskListItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            _id: this.props.tID,
            done: this.props.done
        }
    }  

    componentWillMount () {
                     
    }

    componentDidMount () {
        
    }

    componentDidUpdate () {
        
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.name,
            _id: nextProps.tID,
            done: nextProps.done
        });        
    }

    handleTaskStatusChange(event){
        event.persist()
        var _data = {taskstatus: event.target.checked}
        var that = this;
        var cID = localStorage.getItem('currentCardID')
        if(cID != ''){                    
            
            $.ajax('http://localhost:4000/api/cards/'+ cID + '/tasks/' + this.state._id, {
                type: 'put',
                data: JSON.stringify( _data ),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {                     
                    that.props.action(data)                    
                }
            });

        }
    }

    deleteTask(event){                
        var that = this;
        var cID = localStorage.getItem('currentCardID');
        if(cID != ''){                                
            $.ajax('http://localhost:4000/api/cards/'+ cID + '/tasks/' + this.state._id, {
                type: 'delete',                
                success: function(data) {                                         
                    that.props.update(cID)                    
                }
            });

        }
    }

    render(){
        var that = this;         
        
        return (
            <div id={this.props.tID} className="row">
                <div className="col-sm-1 col-md-1 col-lg-1">                        
                    <input className="btn-right" type="checkbox" checked={this.state.done} onChange={this.handleTaskStatusChange.bind(this)}></input>
                </div>
                <div className="col-sm-9 col-md-9 col-lg-9">                        
                    <input className="input-title" type="text" placeholder="Task details" defaultValue={this.state.name}></input>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">                        
                    <button onClick={this.deleteTask.bind(this)} className="btn btn-round">X</button>
                </div>
            </div>
        )
    }
}

export default TaskListItem;