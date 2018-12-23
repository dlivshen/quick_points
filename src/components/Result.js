import React from 'react';
import PropTypes from 'prop-types';
import { Label, Col } from 'react-bootstrap';

/**
 * Create a new pane that displays the result of the calculation.
 * @param props
 *          - value - The value to display
 */
function ResultPane({resultValue}) {
    if (isNaN(parseFloat(resultValue))) {
        return null;
    }

    const value = resultValue;
    const amount = value === 1 ? "point" : "points";
    let bs_style = "success";
    if (value > 5) {
        bs_style = "warning";
    }
    if (value > 10) {
        bs_style = "danger";
    }

    return (
        <Col xsOffset={4} className="popper">
            <h1>
                <Label bsStyle={bs_style}>
                    {value} {amount}
                </Label>
            </h1>
        </Col>
    );
}

ResultPane.propTypes = {
    resultValue: PropTypes.number
};

export default ResultPane;