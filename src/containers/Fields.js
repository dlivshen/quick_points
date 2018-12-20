import { connect } from 'react-redux'
import { valueChange } from '../actions';
import Fields from '../components/Fields'


const mapStateToProps = state => ({
    fields: state.fields
});

const mapDispatchToProps = dispatch => ({
    onChange: (id, value) => dispatch(valueChange(id, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Fields)