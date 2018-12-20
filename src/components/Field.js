import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormControl, Col } from 'react-bootstrap';

const Field = ({fieldText, fieldId, fieldValue, fieldOnChange}) => (
    <Col componentClass={ControlLabel} xs={6}>
        <ControlLabel>
            {fieldText} (gr)
        </ControlLabel>
        <FormControl
            type="number"
            name={fieldId}
            value={fieldValue}
            placeholder={"Enter value"}
            onChange={fieldOnChange}
            bsSize="large"
        />
    </Col>
);


Field.propTypes = {
    fieldText: PropTypes.string.isRequired,
    fieldId: PropTypes.string.isRequired,
    fieldOnChange: PropTypes.func.isRequired
};

export default Field;