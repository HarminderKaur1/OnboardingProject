import React from 'react'
import $ from 'jquery';
import { Button, Modal, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
export default class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            Success: { Data: '' },

            ProductName: '',
            ProductPrice: '',

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
        if (!this.state.ProductName) {
            formIsValid = false;
            errors['ProductName'] = 'please enter Product name';
        }
        if (typeof this.state.ProductName !== "undefined") {
            if (!this.state.ProductName.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["ProductName"] = "*Please enter only alphabet characters.";
            }
        }

        if (!this.state.ProductPrice) {
            formIsValid = false;
            errors['ProductPrice'] = '*Please enter the Product Price'
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    onCreateSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let data = { 'PName': this.state.ProductName, 'PPrice': this.state.ProductPrice };

            $.ajax({
                url: "/Product/Create",
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
                    <Modal.Header> Create Product </Modal.Header>
                    <Modal.Content>
                        <Form className="ui form segment">
                            <Form.Field>

                                <label>Name</label>
                                <input type="text" name="ProductName" placeholder='Name' value={this.state.value} onChange={this.onChange.bind(this)} />
                                <div style={{ color: 'red' }}>
                                    {this.state.errors.ProductName}
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <label>Price</label>
                                <div class="ui input">  <input type="text" name="ProductPrice" placeholder='Price' value={this.state.value} onChange={this.onChange} />
                                </div><div style={{ color: 'red' }}>
                                    {this.state.errors.ProductPrice}
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





