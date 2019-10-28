import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';
//import SaleDelete from './SaleDelete.jsx';
//import SaleCreate from './SaleCreate.jsx';
//import SaleUpdate from './SaleUpdate.jsx';
import $ from 'jquery';
export  class FetchSalesDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SaleList: [{ Id: '', DateSold: '', CustomerName: '', ProductName: '', StoreName: '' }],
            Success: { Data: '' },

            showDeleteModal: false,
            deleteId: 0,

            showCreateModel: false,

            Id: '',
            ProductId: '',
            StoreId: '',
            CustomerId: '',
            DateSold: '',

            showUpdateModel: false,
            updateId: 0,

            Sucess: [],
            errors: {}
        };

        this.loadData = this.loadData.bind(this);



        //this.DateConverter = this.DateConverter.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    DateConverter(tempdate) {

        var converted = parseInt((tempdate.replace("/Date(", "").replace(")/", "")))

        var temp = new Date(converted)
        var date = (temp.getFullYear() + "-" + ((temp.getMonth()) + 1) + "-" + temp.getDate())
        return date

    }

    //Get sales
    loadData() {

        $.ajax({
            url: "/Sales/GetSales",
            type: "GET",
            success: function (data) { this.setState({ SaleList: data }) }.bind(this)
        });
    }

    //Delete    

    //Create

    //Update


    render() {
        let list = this.state.SaleList;
        let tableData = null;
        if (list != "") {
            tableData = list.map(sale =>
                <tr key={sale.saleid}>

                    <td className="two wide">{sale.cid}</td>
                    <td className="two wide">{sale.pid}</td>
                    <td className="two wide">{sale.sid}</td>
                    <td className="two wide">{sale.DateSold}</td>

                    <td className="two wide column">
                        <Button className="ui yellow button" ><i className="edit icon"></i>EDIT</Button>
                    </td>

                    <td className="two wide column">
                        <Button className="ui red button" ><i className="trash icon"></i>DELETE</Button>
                    </td>

                </tr>

            )

        }
        return (
            <React.Fragment>
                <div>
                    <div><Button primary >New Sale</Button></div>
                   
                    <table className="ui striped table">
                        <thead>
                            <tr>

                                <th className="two wide">Customer</th>
                                <th className="two wide">Product</th>
                                <th className="two wide">Store</th>
                                <th className="two wide">DateSold</th>
                                <th className="two wide">Actions</th>
                                <th className="two wide">Actions</th>
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