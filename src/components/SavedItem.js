import React from 'react';

import { ListGroupItem } from 'react-bootstrap';

const SavedItem = ({itemName, points}) => (
    <ListGroupItem header={itemName}>
        {points} points
    </ListGroupItem>
);


export default SavedItem;