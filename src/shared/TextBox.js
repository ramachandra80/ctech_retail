import React from 'react'
import { ErrorMessage, Field } from 'formik'
import {Row, Col} from 'reactstrap'

const TextBox = (props) => {

    return(
            <div className="field col-sm-12" hidden={props.hidden?props.hidden:false}>
                <Row>
                    <label className="labelName col-lg-2">{props.labelName}</label>
                    <Field className={props.error && props.touched ? 'text-input error col-lg-6' : 'text-input col-lg-6'} 
                    name={props.name} component="input" />
                    <ErrorMessage className="errorMessage col-lg-4" name={props.name} component="div"/>
                </Row>
            </div>
    );    
}

export default TextBox;