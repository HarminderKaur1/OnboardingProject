import React from 'react'
import reactDom from 'react-dom'
import $ from 'jquery';
import { Button, Modal, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
export default class CreateCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerList: [],
            Success: { Data: '' },

            CustomerName: '',
            CustomerAddress: '',

            errors: {}
        }
        this.onCreateSubmit = this.onCreateSubmit.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onChange = this.onChange.bind(this);
        //this.onDeleteSubmit = this.onDeleteSubmit.bind(this);
        //this.oCloseDelete = this.onCloseDelete.bind(this);

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

    onCreateSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let data = { 'CName': this.state.CustomerName, 'CAddress': this.state.CustomerAddress };

            $.ajax({
                url: "/Customer/Create",
                type: "POST",
                data: data,
                success: function (data) {
                    this.setState({ Success: data })

                    window.location.reload()
                }.bind(this)
            });

        }
    }


    onClose() {
        this.setState({ showCreateModal: false });
        window.location.reload()
    }

    onChange(e) {

        this.setState({ [e.target.name]: e.target.value });
        //alert("data has been submitted");

    }
    //this.setState({ [e.target.Customerddress]: e.target.value });





    render() {
        return (
            <React.Fragment>
                <Modal open={this.props.showCreateModal} onClose={this.props.onClose} size='small'>
                    <Modal.Header> Create Customer </Modal.Header>
                    <Modal.Content>
                        <Form className="ui form segment">
                            <Form.Field>

                                <label>Name</label>
                                <input type="text" name="CustomerName" placeholder='Name' value={this.state.CustomerName} onChange={this.onChange.bind(this)} />
                                <div style={{ color: 'red' }}>
                                    {this.state.errors.CustomerName}
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <div class="ui input">  <input type="text" name="CustomerAddress" placeholder='Address' value={this.state.value} onChange={this.onChange} />
                                </div><div style={{ color: 'red' }}>
                                    {this.state.errors.CustomerAddress}
                                </div>
                            </Form.Field>
                        </Form>

                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.props.onClose} secondary >Cancel</Button>
                        <Button onClick={this.onCreateSubmit} className="ui green button">Create</Button>


                    </Modal.Actions>
                </Modal>


            </React.Fragment>
        )
    }
}





