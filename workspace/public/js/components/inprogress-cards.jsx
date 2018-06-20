import React from 'react';
import CardListItem from './card-listitem.jsx'

class InProgress extends React.Component {
    
    constructor() {
        super();
        this.state = {
            data: 
            [
                {
                    "_id": "",
                    "status": "in-progress",
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
        $.get("http://localhost:4000/api/cards?status=in-progress", function(result, status){
            if(result.length > 0){
                that.setState({data: result})
            }            
        });
    }
    
    render() {        
        return (
            <div className="active mainMenu">
                <a href="#inProgressSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle mainMenuItem">In Progress</a>
                <ul className="collapse list-unstyled" id="inProgress">
                    {this.state.data.map((card, i) => <CardListItem action={this.props.action} key = {i} title = {card.title} 
                     tCount = {card.__v} uID = {card._id}/>)}                                                                                
                </ul>                
            </div>
        )
    }
}

export default InProgress;