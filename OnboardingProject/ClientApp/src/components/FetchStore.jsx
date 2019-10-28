import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery';
import CreateStore from './CreateStore'
import DeleteStore from './DeleteStore'
export class FetchStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeList: [], success: { Data: '' },
            showCreateModal: false, StoreName: '', StoreAddress: '',
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
        //this.showUpdateModel = this.showUpdateModel.bind(this);
        //this.closeUpdateModel = this.closeUpdateModel.bind(this);
        //this.onUpdateSubmit = this.onUpdateSubmit.bind(this);
        //this.onChange = this.onChange.bind(this);

    }
    componentDidMount() {
        this.loadData();

    }
    loadData() {

        $.ajax({
            url: "/Store/GetStores",
            type: "GET",
            success: function (data) { this.setState({ storeList: data }) }.bind(this)
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

        let list = this.state.storeList;
        var tableData = null;
        if (list != " ") {
            tableData = list.map((lists, index) =>
                <tr key={lists.sid}>
                    <td className="two wide">{lists.sname}</td>
                    <td className="two wide">{lists.saddress}</td>
                    <td className="four wide"><Button className="ui yellow button"><i className="edit icon"></i>EDIT</Button>

                    </td><td className="four wide"><Button className="ui red button" onClick={this.handleDelete.bind(this, lists.sid)}><i className="trash icon"></i>DELETE</Button></td></tr>
            )
        }
        return (

            <React.Fragment>
                <div>

                    <Button className="ui green button" onClick={this.showCreateModal} > New Store</Button>

                    <CreateStore onChange={this.onChange} onClose={this.closeCreateModal}
                        showCreateModal={this.state.showCreateModal}
                        onCreateSubmit={this.onCreateSubmit} />
                    <DeleteStore delete={this.state.deleteId} onClose={this.closeDeleteModal} onDeleteSubmit={this.onDeleteSubmit} showDeleteModal={this.state.showDeleteModal} />

                    <table className="ui striped table">
                        <thead>
                            <tr>

                                <th className="two wide">Store Name</th>
                                <th className="four wide">Store Name</th>
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