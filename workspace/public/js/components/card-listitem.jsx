import React from 'react';
import Right from './right-component.jsx'

class CardListItem extends React.Component{  
    constructor(props) {
        super(props);              
    }
    
    updateRightView(event){         
        if(this.props.uID){
            var uID = this.props.uID
            var title = this.props.title
            var tCount = this.props.tCount

            this.props.action(uID)
            console.log('#' + this.props.uID)

            if(localStorage.getItem('currentCardID')){
                $('#' + localStorage.getItem('currentCardID')).removeClass('homeSubmenuItemSelected')    
            }
            
            $('#' + this.props.uID).addClass('homeSubmenuItemSelected')
            localStorage.setItem('currentCardID', this.props.uID);
        }
    }

    render(){        
        return (
            <li onClick={this.updateRightView.bind(this)} id = {this.props.uID} className="homeSubmenuItem">
                <a>                         
                    <div className="row">
                        <div className="col-sm-10 col-md-10 col-lg-10">
                            <p>{this.props.title}</p>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <button className="btn btn-round">{this.props.tCount}</button>
                        </div>                        
                    </div>                          
                </a>
            </li>
        )
    }
}

export default CardListItem;