import React from 'react';
import { connect } from 'react-redux';
import { Grid, ListGroup } from 'react-bootstrap';

import SavedItem from '../components/SavedItem'
import { removeItem, setSelected } from '../actions/savedItems'
import { setValues } from "../actions/fields";
import {chain} from "redux-chain";

const SavedItems = ({onSelect, onRemove, savedItems}) => {
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
                item={savedItem}
                onRemove={itemName => onRemove(itemName)}
                onSelect={item => onSelect(item)}
            />
        )}
        </ListGroup>
        </Grid>
    );
};

const mapDispatchToProps = dispatch => ({
    onRemove: itemName => dispatch(removeItem(itemName)),
    onSelect: item => dispatch(chain(
        setValues(item.fatValue, item.carbValue, item.protValue, item.fiberValue),
        setSelected(item.id)
    ))
});

const mapStateToProps = state => ({
    savedItems: state.savedItems
});

export default connect (mapStateToProps, mapDispatchToProps) (SavedItems);