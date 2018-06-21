import React from 'react';
import CardListItem from './card-listitem.jsx'

class Done extends React.Component {
    
    constructor() {
        super();
        this.state = {
            data: []
        }
    }    

    componentWillMount () {
        var that = this; 
        $.get("http://localhost:4000/api/cards?status=done", function(result, status){
            if(result.length > 0){
                $('#doneSubmenu').hide()
                that.setState({data: result})
            }
            else{
                $('#doneSubmenu').show()
            }            
        });
    }

    componentWillReceiveProps(nextProps) {
        var that = this; 
        $.get("http://localhost:4000/api/cards?status=done", function(result, status){
            if(result.length > 0){
                $('#doneSubmenu').hide()
                that.setState({data: result})
            }
            else{
                $('#doneSubmenu').show()
            }            
        });
    }
    
    render() {        
        return (
            <div className="active mainMenu">
                <h5>Done</h5>
                <ul className="list-unstyled">
                    <li className="homeSubmenuItem" id="doneSubmenu">
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

export default Done;