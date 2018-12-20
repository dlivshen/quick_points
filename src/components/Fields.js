import React from 'react';
import Field  from '../components/Field';
import { Grid, Row } from 'react-bootstrap';

const Fields = ({fields, onChange}) => (
    <Grid className="main-grid">
        <Row className="show-grid">
            <Field
                fieldText={fields.fat.text}
                fieldId={fields.fat.id}
                fieldValue={fields.fat.value}
                fieldOnChange={(event) => {onChange(fields.fat.id, event.target.value)}}
            />
            <Field
                fieldText={fields.carb.text}
                fieldId={fields.carb.id}
                fieldValue={fields.carb.value}
                fieldOnChange={(event) => {onChange(fields.carb.id, event.target.value)}}
            />
        </Row>
        <Row className="show-grid">
            <Field
                fieldText={fields.prot.text}
                fieldId={fields.prot.id}
                fieldValue={fields.prot.value}
                fieldOnChange={(event) => {onChange(fields.prot.id, event.target.value)}}
            />
            <Field
                fieldText={fields.fiber.text}
                fieldId={fields.fiber.id}
                fieldValue={fields.fiber.value}
                fieldOnChange={(event) => {onChange(fields.fiber.id, event.target.value)}}
            />
        </Row>
    </Grid>
);

// TODO add propTypes

export default Fields;