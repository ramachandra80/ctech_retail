import React from 'react'
import {Container} from 'reactstrap'
import Menu from './Menu'

class HomePage extends React.Component{
constructor(props){
    super(props)
}

render(){
    const MenuVals = [{name:"Set Up", color:"Teal", subMenu:["Items","GST","Price Rules"], 
                    links:["/items","/gst","/priceRules"], 
                    icons:["glyphicon glyphicon-asterisk", "glyphicon glyphicon-cog","glyphicon glyphicon-trash"]},
                 {name:"Invoice", color:"Navy", subMenu:["Create Invoice", "Recurring Invoice","Update Invoice"], links:["/createInvoice","/createRecInv","/updateInvoice"],
                 icons:["glyphicon glyphicon-asterisk", "glyphicon glyphicon-repeat","glyphicon glyphicon-cog"]},
                 {name:"Inventory", color:"IndianRed", subMenu:["Create Inventory", "Recurring Inventory","Update Inventory"],links:["/createInventory","/createRecInven","/updateInventory"],
                 icons:["glyphicon glyphicon-asterisk", "glyphicon glyphicon-repeat","glyphicon glyphicon-cog"]},
                 {name:"Reports", color:"DarkRed", subMenu:["Daily Reports","Weekly Reports","Monthly Reports"],links:["/dailyReports","/weeklyReports","/monthlyReports"],
                 icons:["glyphicon glyphicon-dashboard","glyphicon glyphicon-dashboard","glyphicon glyphicon-dashboard"]}
                ]

    return(
        <Container>
            {MenuVals.map((menuItem,i) => (
              <Menu val={menuItem} key={i} />
            ))}
        </Container>
    )
}

}

export default HomePage;