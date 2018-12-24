import { connect } from 'react-redux'
import { chain } from 'redux-chain';
import { valueChange } from '../actions/fields';
import Fields from '../components/Fields'
import {setSelected} from "../actions/savedItems";


const mapStateToProps = state => ({
    fields: state.fields
});

const mapDispatchToProps = dispatch => ({
    onChange: (id, value) => dispatch(chain(
        valueChange(id, value),
        setSelected(null)
    ))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Fields)