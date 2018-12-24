import React from 'react';

import { Grid, Col, ListGroupItem, Button } from 'react-bootstrap';

const SavedItem = ({onSelect, onRemove, item, points}) => (
    <ListGroupItem header={item.text} onClick={() => onSelect(item)} active={item.isSelected}>
        <Grid>
            <Col xs={9}>
            {item.points} points
            </Col>
            <Col xs={3} xsPull={0}>
            <Button onClick={e => onRemove(item.text)} bsStyle="danger">
                -
            </Button>
            </Col>
        </Grid>
    </ListGroupItem>
);


export default SavedItem;