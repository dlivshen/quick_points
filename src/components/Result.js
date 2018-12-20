import React from 'react';
import { Label, Col } from 'react-bootstrap';

/**
 * Create a new pane that displays the result of the calculation.
 * @param props
 *          - value - The value to display
 */
function ResultPane(props) {
    if (isNaN(parseFloat(props.value))) {
        return null;
    }

    const value = props.value;
    const amount = value === 1 ? "point" : "points";
    let bs_style = "success";
    if (value > 5) {
        bs_style = "warning";
    }
    if (value > 10) {
        bs_style = "danger";
    }

    return (
        <Col xsOffset={4}>
            <h1>
                <Label bsStyle={bs_style}>
                    {value} {amount}
                </Label>
            </h1>
        </Col>
    );
}

export default ResultPane;