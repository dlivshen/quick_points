import { connect } from 'react-redux'
import Result from '../components/Result'
import { calculatePointsValue } from "../logic/PointsCalculations";

const calculateValue = (fields) => {
    return calculatePointsValue(
        fields.fat.value,
        fields.carb.value,
        fields.prot.value,
        fields.fiber.value
    );
};

const mapStateToProps = state => ({
    resultValue: calculateValue(state.fields)
});

export default connect(
    mapStateToProps
)(Result);