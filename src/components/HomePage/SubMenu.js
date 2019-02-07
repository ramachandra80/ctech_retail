import React from 'react';
import {Row} from 'reactstrap'
import {Glyphicon, Button} from 'react-bootstrap'

class SubMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="subMenuItem">
                <h4 style={{fontSize:"20px"}}><strong><span style={{marginRight:"5px"}}><i className={this.props.icon} /></span> {this.props.name}</strong></h4>
            </div>
        )
    }
}

export default SubMenu;