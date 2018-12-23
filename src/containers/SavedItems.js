import React from 'react';
import { connect } from 'react-redux';
import { Grid, ListGroup } from 'react-bootstrap';

import SavedItem from '../components/SavedItem'

const SavedItems = ({savedItems}) => {
    if (savedItems === undefined || savedItems.length === 0) {
        return null;
    }
    return (
        <Grid className="space-up">
        <h4>
            {"Saved items:"}
        </h4>
        <ListGroup>
        {savedItems.map(savedItem =>
            <SavedItem
                key={savedItem.id}
                itemName={savedItem.text}
                points={savedItem.points}
            />
        )}
        </ListGroup>
        </Grid>
    );
};

const mapStateToProps = state => ({
    savedItems: state.savedItems
});

export default connect (mapStateToProps) (SavedItems);