import React from 'react';
import ReactDOM from 'react-dom';
import CreateCustomer from './CreateCustomer';
import EditCustomer from './EditCustomer';
import DeleteCustomer from './DeleteCustomer';
import {  Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import $ from 'jquery';

export class FetchCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerList: [], success: { Data: '' },
            showCreateModal: false, CustomerId: '', CustomerName: '', CustomerAddress: '', showUpdateModal: false,
            updateId: 0,
            Success: [], errors: {}


        };

        this.loadData = this.loadData.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);
        this.showUpdateModal = this.showUpdateModal.bind(this);
        this.closeUpdateModal = this.closeUpdateModal.bind(this);
        
        this.showCreateModal = this.showCreateModal.bind(this);
        this.closeCreateModal = this.closeCreateModal.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    componentDidMount() {
        this.loadData();

    }
    loadData() {

        $.ajax({
            url: "/Customer/GetCustomers",
            type: "GET",
            success: function (data) { this.setState({ customerList: data }) }.bind(this)
        });
    }
    showCreateModal() {
        this.setState({ showCreateModal: true });
    }
    closeCreateModal() {
        this.setState({ showCreateModal: false });
        window.location.reload()
    }
    showUpdateModal(id) {
        //alert(id.CName);
        this.setState({ showUpdateModal: true });
        this.setState({ updateId: id });
       

        $.ajax({
            url: "/Customer/Details/{id}",
            type: "GET",
            data: { id: id },
            success: function (data) {
                
                this.setState({
                    CustomerId: this.cid,
                    CustomerName: this.cname,
                    CustomerAddress: this.caddress,
                    
                })
                
            }.bind(this)

        })
        
    }
    handleDelete(id) {
        this.setState({ showDeleteModal: true });
        this.setState({ deleteId: id });
    }

    closeDeleteModal() {
        this.setState({ showDeleteModal: false });
        window.location.reload()
    }

    closeUpdateModal() {
        this.setState({ showUpdateModal: false });
        window.location.reload()
    }
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        let list = this.state.customerList;
        var tableData = null;
        if (list != " ") {
            
            tableData = list.map((lists, index) =>
                <tr key={lists.cid}>
                    <td className="two wide">{lists.cname}</td>
                    <td className="two wide">{lists.caddress}</td>
                    <td className="four wide">
                        <Button className="ui yellow button" onClick={this.showUpdateModal.bind(this, lists.cid)}><i className="edit icon"></i>EDIT</Button>
                    </td>


                    <td className="four wide"><Button className="ui red button" onClick={this.handleDelete.bind(this, lists.cid)}><i className="trash icon"></i>DELETE</Button>
                    </td>
                    
                </tr>
               
            )
        }
        return (

            <React.Fragment>
                <div>

                    <Button className="ui green button" onClick={this.showCreateModal} > New Customer</Button>
                    <CreateCustomer onChange={this.onChange} onClose={this.closeCreateModal}
                        showCreateModal={this.state.showCreateModal}
                        onCreateSubmit={this.onCreateSubmit} />

                    <EditCustomer onChange={this.onChange} update={this.state.updateId}
                        onClose={this.closeUpdateModal} onEditSubmit={this.onEditSubmit}
                                showUpdateModal={this.state.showUpdateModal}
                        Id={this.state.CustomerId} Name={this.state.CustomerName}
                        Address={this.state.CustomerAddress} errors={this.state.errors} />
                    <DeleteCustomer delete={this.state.deleteId} onClose={this.closeDeleteModal} onDeleteSubmit={this.onDeleteSubmit} showDeleteModal={this.state.showDeleteModal} />
                    <table className="ui striped table">
                        <thead>
                            <tr>

                                <th className="two wide">Name</th>
                                <th className="four wide">Address</th>
                                <th className="four wide">Action</th>
                                <th className="four wide">Action</th>


                            </tr>
                        </thead>
                        <tbody>
                            {tableData}
                            

                        </tbody>
                    </table>

                </div>
            </React.Fragment>


        )
    }
}