import React from 'react';
import $ from 'jquery';
import { Modal, Button, Form } from 'semantic-ui-react';
export default class EditCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { CustomerId:'',CustomerName:'', CustomerAddress:''

        };

        this.onClose = this.onClose.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }
    onEditSubmit() {
        if (this.validateForm()) {

            let data = { 'CId': this.state.CustomerId, 'CName': this.state.CustomerName, 'CAddress': this.state.CustomerAddress };
            $.ajax({
                url: "/Customer/Edit",
                type: "POST",
                data: data,
                success: function (data) {
                    this.setState({ Success: data })
                    window.location.reload()
                }.bind(this)
            });
        }
    }
    validateForm() {
        let errors = {}
        let formIsValid = true;
        if (!this.state.CustomerName) {
            formIsValid = false;
            errors['CustomerName'] = 'please enter customer name';
        }
        if (typeof this.state.CustomerName !== "undefined") {
            if (!this.state.CustomerName.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["CustomerName"] = "*Please enter only alphabet characters.";
            }
        }

        if (!this.state.CustomerAddress) {
            formIsValid = false;
            errors['CustomerAddress'] = '*Please enter the Customer Address'
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }
    onClose() {
        this.setState({ showUpdateModal: false });
        window.location.reload()
    }

    render() {
        return (
            <React.Fragment>
                <Modal open={this.props.showUpdateModal} onClose={this.props.onClose} size='small'>
                    <Modal.Header> Edit Customer </Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Name</label>
                                <input type="text" name="CustomerName" placeholder='Name' defaultValue={this.props.CustomerName} onChange={this.props.onChange} />
                                <div style={{ color: 'red' }}>
                                    {this.props.errors.CustomerName}
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <input type="text" name="CustomerAddress" placeholder='Address' defaultValue={this.state.value} onChange={this.props.onChange} />
                                <div style={{ color: 'red' }}>
                                    {this.props.errors.CustomerAddress}
                                </div>
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.props.onClose} secondary >Cancel
                        </Button>
                        <Button onClick={this.props.onEditSubmit} className="ui green button">Edit
                        <i className="check icon"></i>
                        </Button>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
}