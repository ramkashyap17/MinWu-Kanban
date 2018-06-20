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
        this.setValue(this)
    }

    componentDidUpdate () {
        this.setValue(this)
    }

    setValue(that){
        console.log('Entered here: ' + that.state._id)
        $('#task' + that.state._id).val(that.state.name)
    }

    render(){
        var that = this;         
        
        return (
            <div id={this.props.tID} className="row">
                <div className="col-sm-1 col-md-1 col-lg-1">                        
                    <input className="btn-right" type="checkbox"></input>
                </div>
                <div className="col-sm-9 col-md-9 col-lg-9">                        
                    <input className="input-title" type="text" id={'task' + this.state._id} placeholder="Task details"></input>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">                        
                    <button className="btn btn-round">X</button>
                </div>
            </div>
        )
    }
}

export default TaskListItem;