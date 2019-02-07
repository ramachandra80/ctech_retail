import React from 'react'
import { ErrorMessage, Field } from 'formik'
import {Row, Col} from 'reactstrap'

const ReadOnly = (props) => {

    return(
            <div className="field col-lg-12">
                <Row>
                    <label className="labelName col-lg-2">{props.labelName}</label>
                    <strong><p className="fieldValue col-lg-10">{props.value}</p></strong>
                </Row>
            </div>
    );    
}

export default ReadOnly;