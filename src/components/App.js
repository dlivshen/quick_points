import React from 'react';
import Fields from '../containers/Fields';
import Result from '../containers/Result'
import { Panel, Image} from 'react-bootstrap';
import '../App.css';
import logo from '../logo.png';

const App = () => (
    <Panel bsStyle="info" className="app-global">
        <Panel.Heading className="main-header">
            <Panel.Title componentClass="h1">
                <Image src={logo} responsive={true} className="main-logo"/>
            </Panel.Title>
        </Panel.Heading>
        <Fields />
        <Result />
    </Panel>
);

export default App;