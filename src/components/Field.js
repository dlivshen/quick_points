import React from 'react';
import { ControlLabel, FormControl, Col } from 'react-bootstrap';
/**
 * Create a new field object with label and input.
 * @param props -
 *      - fieldText - The components's text to be displayed.
 *      - fieldName - The components name.
 *      - fieldValue - The value of the components.
 *      - fieldOnChange - The onChange callback function.
 */
function Field(props) {
    return (
            <Col componentClass={ControlLabel} xs={6}>
                <ControlLabel>
                    {props.fieldText} (gr)
                </ControlLabel>
                <FormControl
                       type="number"
                       name={props.fieldName}
                       value={props.fieldValue}
                       placeholder={"Enter value"}
                       onChange={props.fieldOnChange}
                       bsSize="large"
                />
            </Col>
    );
}


export default Field;