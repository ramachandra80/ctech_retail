import React from 'react'
import { ErrorMessage, Field } from 'formik'
import {Row} from 'reactstrap'

const Dropdown = (props) => {

    return(
            <div className="field col-lg-12">
                <Row>
                    <label className="labelName col-lg-2">{props.labelName}</label>
                    <Field className={props.error && props.touched ? 'dropdown error col-lg-6' : 'dropdown col-lg-6' }
                    component="select" name={props.name} >
                        <option value="">Select</option>
                            {props.options.map( (item, index) =>
                                <option key={item+index} value={item.replace(' ','_').toLowerCase()}>{item}</option>
                            )}
                    </Field>
                    <ErrorMessage className="errorMessage col-lg-4" name={props.name} component="div"/>
                </Row>
            </div>
    );    
}

export default Dropdown;