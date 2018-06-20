import React from 'react';
import CardListItem from './card-listitem.jsx'

class Done extends React.Component {
    
    constructor() {
        super();
        this.state = {
            data: 
            [
                {
                    "_id": "",
                    "status": "done",
                    "description": "...",
                    "title": "Loading....",
                    "__v": 0,
                    "tasks": []
                }                    
            ]
        }
    }    

    componentWillMount () {
        var that = this; 
        $.get("http://localhost:4000/api/cards?status=done", function(result, status){
            if(result.length > 0){
                that.setState({data: result})
            }            
        });
    }

    componentWillReceiveProps(nextProps) {
        var that = this; 
        $.get("http://localhost:4000/api/cards?status=done", function(result, status){
            if(result.length > 0){
                that.setState({data: result})
            }            
        });
    }
    
    render() {        
        return (
            <div className="active mainMenu">
                <h5>Done</h5>
                <ul className="list-unstyled" id="doneSubmenu">
                    {this.state.data.map((card, i) => <CardListItem action={this.props.action} key = {i} title = {card.title} 
                     tCount = {card.__v} uID = {card._id}/>)}                                                                                
                </ul>                
            </div>
        )
    }
}

export default Done;