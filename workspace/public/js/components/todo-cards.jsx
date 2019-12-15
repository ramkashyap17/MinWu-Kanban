import React from 'react';
import CardListItem from './card-listitem.jsx'

class Todo extends React.Component {
    
    constructor() {
        super();
        this.state = {
            data: 
            [
                {
                    "_id": "",
                    "status": "todo",
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
        $.get("http://localhost:4000/api/cards?status=todo", function(result, status){
            if(result.length > 0){
                $('#todoSubmenu').hide()
                that.setState({data: result})
            }
            else{
                $('#todoSubmenu').show()
            }            
        });
    }

    componentWillReceiveProps(nextProps) {
        var that = this; 
        $.get("http://localhost:4000/api/cards?status=todo", function(result, status){
            if(result.length > 0){
                $('#todoSubmenu').hide()
                that.setState({data: result})
            }
            else{
                $('#todoSubmenu').show()
            }            
        });
    }
    
    render() {        
        return (
            <div className="active mainMenu">
                <h5>Todo</h5>
                <ul className="list-unstyled" >
                    <li className="homeSubmenuItem" id="todoSubmenu">
                        <a>                         
                            <div className="row">
                                <div className="col-sm-10 col-md-10 col-lg-10">
                                    <p>Nothing Here.</p>
                                </div>                                
                            </div>                          
                        </a>
                    </li>
                    {this.state.data.map((card, i) => <CardListItem action={this.props.action} key = {i} title = {card.title} 
                     tCount = {card.__v} uID = {card._id}/>)}                                                                                
                </ul>                
            </div>
        )
    }
}

export default Todo;