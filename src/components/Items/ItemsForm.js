import React from 'react'
import {Container, Button } from 'reactstrap'
import { Formik, Form } from 'formik'
import  * as Yup from 'yup'
import TextBox from '../../shared/TextBox'
import Dropdown from '../../shared/Dropdown'
import ReadOnly from '../../shared/ReadOnly'
//import VirtualizedSelect from "react-virtualized-select";

import "react-select/dist/react-select.css";
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";



class CreateItemForm  extends React.Component{
   constructor(props){
       super(props);
       this.state = {hideNoOfItems: true, unit:''};
       this.handleUnitChange = this.handleUnitChange.bind(this);
   }

   handleUnitChange(e){
    let val = e.target.value
    if(val === "pack")
        this.setState({hideNoOfItems: false, unit:val});
    else
        this.setState({hideNoOfItems: true, unit:val});
   }

    render(){
        const NewItemSchema = Yup.object().shape({
            itemName: Yup.string()
              .min(4, 'Too Short!')
              .max(5, 'Too Long!')
              .required('"Item Name" is required.'),
            brand: Yup.string()
              .required('"Brand" is required.'),
            category: Yup.string()
              .required('"Category" is required.'),
            unit: Yup.string()
                .required('"Unit" is required.'),
            quantity: Yup.string()
                .required('"Quantity" is required.'),
            marginType: Yup.string()
                .required('"Margin type" is required.'),
            margin: Yup.string()
                .required('"Margin" is required.')
          });

        var perc = (x, y) => {
            let array = []
            for(var i = x; i < y; i++)
                array.push(i.toString())
            return array
        }
    
        return( 
            <Container>
            <Formik
                initialValues={{
                    itemName: '',
                    brand: '',
                    productCode:'',
                    category:'',
                    unit:'',
                    noOfItems:'',
                    quantity:'',
                    marginType:'',
                    margin:'',
                }}
                validationSchema={NewItemSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
            {({ values, errors, touched ,isSubmitting}) => (
            <Form>
                <ReadOnly labelName="Item Code : " value="1234" /> 
                <TextBox labelName="Item Name : " name="itemName" error={errors.itemName} touched={touched.itemName}/>
                <Dropdown labelName="Brand : " name="brand" options={["Spectra","Sudhakhar"]}
                error={errors.brand} touched={touched.brand} />
                <TextBox labelName="Product Code : " name="productCode"/>
                <Dropdown labelName="Category : " name="category" options={["Pipes","Sanatory"]} 
                error={errors.category} touched={touched.category} />
                {/* <Dropdown labelName="Unit : " name="unit" options={["Pack","Piece"]} error={errors.unit} 
                touched={touched.unit}/>
            <TextBox labelName="No. of items in a pack : " name="noOfItems" hidden={(values.unit === 'pack')?false:true}/> */}
                <TextBox labelName="Quantity : " name="quantity" error={errors.quantity} touched={touched.quantity} />
                {/*<ReadOnly labelName="Item Code : " value="1234" />  Make it as editable */}
                {/* Add priceByVendor component : use FieldArray concept */}
                <ReadOnly labelName="Price per item : " value="0.00" />
                <TextBox labelName="MRP : " name="mrp" error={errors.mrp} touched={touched.mrp} />
                <ReadOnly labelName="Max. margin Perc : " value="0%" />
                <Dropdown labelName="Margin Type : " name="marginType" options={["Amount","Percentage"]} error={errors.marginType} 
                touched={touched.marginType}/>
                {(values.marginType === 'percentage')?<Dropdown labelName="Min. margin Perc : " name="margin" options={perc(1,100)} error={errors.margin} 
                touched={touched.margin}/>:
                <TextBox labelName="Min. margin Amt : " name="margin" error={errors.margin} touched={touched.margin} />}
                <div>
                    <div style={{marginLeft:"20%"}}>
                        <Button className="button" color="success" type="submit" disabled={isSubmitting}>Update</Button>
                        <Button className="button" color="primary" type="submit">Refresh</Button>
                    </div>
                </div>
            </Form>
            )}
            </Formik>
           </Container>
        )
    }

}

export default CreateItemForm;
