import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, FormControl, Button } from 'react-bootstrap';
import { addItem } from '../actions/savedItems'


const AddSavedItem = ({onSubmission, fatValue, carbValue, protValue, fiberValue}) => {
    if (isNaN(fatValue) || isNaN(carbValue) || isNaN(protValue) || isNaN(fiberValue) ||
        fatValue === '' || carbValue === '' || protValue === '' || fiberValue === '') {
        return null;
    }

    let name;

    return (
        <form onSubmit={e => {
                e.preventDefault();
                if (!name.value.trim()) {
                    return;
                }
                onSubmission(name.value, fatValue, carbValue, protValue, fiberValue);
                name.value = '';
            }
        }>
                <Grid>
                    <Row className="show-grid space-up popper">
                        <Col xs={9}>
                            <FormControl
                                type="text"
                                name="new_item"
                                inputRef={node => {name = node;}}
                                placeholder={"Enter name to save"}
                            />
                        </Col>
                        <Col xs={2}>
                            <Button type="submit" bsStyle="success">
                                +
                            </Button>
                        </Col>
                    </Row>
                </Grid>
        </form>
    );
};

const mapDispatchToProps = dispatch => ({
    onSubmission: (name, fatValue, carbValue, protValue, fiberValue) => dispatch(addItem(name, fatValue, carbValue, protValue, fiberValue))
});

const mapStateToProps = state => ({
    fatValue: state.fields.fat.value,
    carbValue: state.fields.carb.value,
    protValue: state.fields.prot.value,
    fiberValue: state.fields.fiber.value
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (AddSavedItem);