import React from 'react'
import $ from 'jquery';
import { Button, Modal, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
export default class CreateStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeList: [],
            Success: { Data: '' },

            StoreName: '',
            StoreAddress: '',

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
        if (!this.state.StoreName) {
            formIsValid = false;
            errors['StoreName'] = 'please enter Product name';
        }
        if (typeof this.state.StoreName !== "undefined") {
            if (!this.state.StoreName.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["StoreName"] = "*Please enter only alphabet characters.";
            }
        }

        if (!this.state.StoreAddress) {
            formIsValid = false;
            errors['StoreAddress'] = '*Please enter the Store Address'
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    onCreateSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let data = { 'SName': this.state.StoreName, 'SAddress': this.state.StoreAddress };

            $.ajax({
                url: "/Store/Create",
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


    }

    render() {
        return (
            <React.Fragment>
                <Modal open={this.props.showCreateModal} onClose={this.props.onClose} size='small'>
                    <Modal.Header> Create Store </Modal.Header>
                    <Modal.Content>
                        <Form className="ui form segment">
                            <Form.Field>

                                <label>Name</label>
                                <input type="text" name="StoreName" placeholder='Name' value={this.state.value} onChange={this.onChange.bind(this)} />
                                <div style={{ color: 'red' }}>
                                    {this.state.errors.StoreName}
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <div class="ui input">  <input type="text" name="StoreAddress" placeholder='Address' value={this.state.value} onChange={this.onChange} />
                                </div><div style={{ color: 'red' }}>
                                    {this.state.errors.StoreAddress}
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





