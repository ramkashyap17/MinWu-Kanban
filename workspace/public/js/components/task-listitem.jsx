import React from 'react';

class TaskListItem extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-sm-1 col-md-1 col-lg-1">                        
                    <input className="btn-right" type="checkbox"></input>
                </div>
                <div className="col-sm-9 col-md-9 col-lg-9">                        
                    <input className="input-title" type="text" placeholder="Task details"></input>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">                        
                    <button className="btn btn-round">X</button>
                </div>
            </div>
        )
    }
}

export default TaskListItem;