import React, {Component} from 'react';
import Field from './components/Field';
import { Grid, Row, Panel, Image} from 'react-bootstrap';
import ResultPane from './components/Result';
import './App.css';
import logo from './logo.png';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fatValue: '',
            carbValue: '',
            protValue: '',
            fiberValue: '',
        };

        // binds
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
            value: this.calculateValue()
        });
    }

    calculateValue() {
        const fat = parseFloat(this.state.fatValue);
        const carb = parseFloat(this.state.carbValue);
        const prot = parseFloat(this.state.protValue);
        const fiber = parseFloat(this.state.fiberValue);

        // Calculate the result according to the formula
        let result = (fat*0.2571429) + (carb*0.1085714) + (prot*0.0914286) - (fiber*0.08);

        // Make sure that the result does make logic
        result = Math.max(result, 0);
        result = Math.min(result, 100);

        return Math.round(result);
    }

    render() {
        return (
            <Panel bsStyle="info" className="app-global">
                <Panel.Heading className="main-header">
                    <Panel.Title componentClass="h1">
                        <Image src={logo} responsive={true} className="main-logo"/>
                    </Panel.Title>
                </Panel.Heading>
                <Grid className="main-grid">
                    <Row className="show-grid">
                        <Field
                            fieldText="FAT"
                            fieldName="fatValue"
                            fieldValue={this.state.fatValue}
                            fieldOnChange={this.handleValueChange}
                        />
                        <Field
                            fieldText="CARBS"
                            fieldName="carbValue"
                            fieldValue={this.state.carbValue}
                            fieldOnChange={this.handleValueChange}
                        />
                    </Row>
                    <Row className="show-grid">
                        <Field
                            fieldText="PROTEIN"
                            fieldName="protValue"
                            fieldValue={this.state.protValue}
                            fieldOnChange={this.handleValueChange}
                        />
                        <Field
                            fieldText="FIBER"
                            fieldName="fiberValue"
                            fieldValue={this.state.fiberValue}
                            fieldOnChange={this.handleValueChange}
                        />
                    </Row>
                </Grid>
                        <ResultPane
                            value={this.calculateValue()}
                        />
            </Panel>
        );
    }
}

export default App;