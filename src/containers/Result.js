import { connect } from 'react-redux'
import Result from '../components/Result'

const calculateValue = (fields) => {
    const fat = parseFloat(fields.fat.value);
    const carb = parseFloat(fields.carb.value);
    const prot = parseFloat(fields.prot.value);
    const fiber = parseFloat(fields.fiber.value);

    // Calculate the result according to the formula
    let result = (fat*0.2571429) + (carb*0.1085714) + (prot*0.0914286) - (fiber*0.08);

    // Make sure that the result does make logic
    result = Math.max(result, 0);
    result = Math.min(result, 100);

    return Math.round(result);
}

const mapStateToProps = state => ({
    resultValue: calculateValue(state.fields)
});

export default connect(
    mapStateToProps
)(Result);