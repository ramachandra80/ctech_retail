import React from 'react'
import {Row, Col} from 'reactstrap'
import SubMenu from './SubMenu'

class Menu extends React.Component{
constructor(props){
    super(props);
    this.state = {hide: true}
    this.handleClick = this.handleClick.bind(this)
}

handleClick(e) {
    e.preventDefault();
    this.setState(state => ({hide:! state.hide}))
}

render(){
    var borderColor = { borderColor: this.props.val.color}
    var backgroundColor = {backgroundColor: this.props.val.color}
    var subMenuCss = { borderColor: this.props.val.color, backgroundColor: this.props.val.color}

    return(
        <div className="menu" style={borderColor}>
            <Row className="menuHeader" style={backgroundColor}  onClick={this.handleClick}><h3 style={{margin:"10px"}}>{this.props.val.name}</h3></Row>
            <Row hidden={this.state.hide}>
                {this.props.val.subMenu.map((subMenuItem,i) => (
                    <Col sm="3" className="subMenu" key={i} style={subMenuCss}>
                        <a href={this.props.val.links[i]}>
                            <SubMenu color={this.props.val.color} name={subMenuItem}
                            icon={this.props.val.icons[i]} />
                        </a>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

}

export default Menu;