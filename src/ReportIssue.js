import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ReportIssue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            requirement: '',
            source_name: '',
            source_system:'',
            system_sub_model:'',
            requiredby:'',

        };


    }
    myFunction() {
        document.write("You have submitted it")
    }

    componentWillMount() {
        const {steps} = this.props;
        const {requirement, source_name, source_system,system_sub_model,requiredby} = steps;

        this.setState({requirement, source_name, source_system,system_sub_model,requiredby});
    }

    render() {
        const { requirement, source_name, source_system,system_sub_model,requiredby } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <h3>Request Details</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Your Requirement</td>
                        <td>{requirement.value}</td>
                    </tr>
                    <tr>
                        <td>Source Name</td>
                        <td>{source_name.value}</td>
                    </tr>
                    <tr>
                        <td>Source System</td>
                        <td>{source_system.value}</td>
                    </tr>
                    <tr>
                        <td>System Sub Module</td>
                        <td>{system_sub_model.value}</td>
                    </tr>
                    <tr>
                        <td>Required By</td>
                        <td>{requiredby.value}</td>
                    </tr>
                    </tbody>


                </table>
                <form>
                    <button type="button" id="myBtn" onClick={this.myFunction}>Submit Request</button>
                </form>


            </div>

        );
    }
}

ReportIssue.propTypes = {
    steps: PropTypes.object,
};

ReportIssue.defaultProps = {
    steps: undefined,
};
