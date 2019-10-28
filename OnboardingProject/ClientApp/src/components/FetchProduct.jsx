import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery';
import CreateProduct from './CreateProduct';
import DeleteProduct from './DeleteProduct';
export class FetchProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [], success: { Data: '' },
            showCreateModal: false, ProductName: '', ProductPrice: '',
            Success: [], errors: {}


        };

        this.loadData = this.loadData.bind(this);
        //this.showUpdateModel = this.showUpdateModel.bind(this);
        //this.closeUpdateModel = this.closeUpdateModel.bind(this);
        //this.onUpdateSubmit = this.onUpdateSubmit.bind(this);
        this.showCreateModal = this.showCreateModal.bind(this);
        this.closeCreateModal = this.closeCreateModal.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);
        //this.onChange = this.onChange.bind(this);

    }
    componentDidMount() {
        this.loadData();

    }
    loadData() {

        $.ajax({
            url: "/Product/GetProducts",
            type: "GET",
            success: function (data) { this.setState({productList: data})}.bind(this)
        });
    }
    showCreateModal() {
        this.setState({ showCreateModal: true });
    }
    closeCreateModal() {
        this.setState({ showCreateModal: false });
        window.location.reload()
    }
    handleDelete(id) {
        this.setState({ showDeleteModal: true });
        this.setState({ deleteId: id });
    }
    closeDeleteModal() {
        this.setState({ showDeleteModal: false });
        window.location.reload()
    }
    render() {

        let list = this.state.productList;
        var tableData = null;
        if (list != " ") {
            tableData = list.map((lists, index) =>
                <tr key={lists.pid}>
                    <td className="two wide">{lists.pname}</td>
                    <td className="two wide">{lists.pprice}</td>
                    <td className="four wide"><Button className="ui yellow button"><i className="edit icon"></i>EDIT</Button>

                    </td><td className="four wide"><Button className="ui red button" onClick={this.handleDelete.bind(this, lists.pid)}><i className="trash icon"></i>DELETE</Button>
                    </td></tr>
            )
        }
        return (

            <React.Fragment>
                <div>

                    <Button className="ui green button" onClick={this.showCreateModal} > New Product</Button>
                    <DeleteProduct delete={this.state.deleteId} onClose={this.closeDeleteModal}
                        onDeleteSubmit={this.onDeleteSubmit} showDeleteModal={this.state.showDeleteModal} />

                    <CreateProduct onChange={this.onChange} onClose={this.closeCreateModal}
                        showCreateModal={this.state.showCreateModal}
                        onCreateSubmit={this.onCreateSubmit} />
                    <table className="ui striped table">
                        <thead>
                            <tr>

                                <th className="two wide">Product Name</th>
                                <th className="four wide">Product Price</th>
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