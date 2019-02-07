import React from 'react'
import CreateItemForm from './ItemsForm'



class CreateItem  extends React.Component{

    render(){
        const CreateItem = {
            itemName: "",
            brand: ""
          };

        return(
            <div>
                <CreateItemForm createItem={CreateItem}/>
            </div>
        );
    }

}

export default CreateItem;
