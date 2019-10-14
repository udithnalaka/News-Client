import React, { Component } from 'react'

import Search from '../search/Search';
import Pagination from '../pagination/Pagination';

import {getSearchClient} from './Action'

class ListingTable extends Component {
    
    state = {
        searchDataList: [],
        dataPerPage: 20,
        pageNumber: 1,
        totalPages: 0,
        searchKey: "News"
    }
    

    // pagination current pagenumber changes
    onChangePageHandler = newPage => {
        this.setState({pageNumber : newPage});
        this.callAPI(this.state.searchKey, this.state.pageNumber);
    }

    // on change of search fields will update the state
    onSearchHandler = key => e => {
        let newKey = e.target.value;
        this.setState({searchKey : newKey})
        this.callAPI(this.state.searchKey, this.state.pageNumber);
    }

    // render table header 
    renderTableHeader() { 
        return ( 
            <thead>
                <tr> 
                    {
                        this.props.cols.map((colData, index) => {
                            return <th key={index}>{colData.label}</th>
                        })
                    }
                </tr>
            </thead>
        )
    }

    // render table rows
    renderDataList() { 
        let dataList = this.state.searchDataList;
        return ( 
            <tbody>
                {
                    dataList && dataList.map((dataItem, index) => {
                        return (
                            <tr key={index}>
                                {
                                    this.props.cols.map((colData, index) => { 
                                        return (
                                            <td key={'td' + index}>
                                                {dataItem[colData.key]}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        )
    }

    //set the data returned from API call
    setData(results) {
        this.setState({
            searchDataList : results.hits,
            totalPages : results.nbPages
        })
    }

    //call backend API
    callAPI = (searchKey = '', pageNumber = 1) => {
        getSearchClient(this, searchKey, this.props.pageNumber);
    }

    componentDidMount() {
       this.callAPI();
    }

    render() {
        let { dataPerPage, searchDataList, totalPages} = this.state;
        const dataList = searchDataList;

        return (
            <div>
               
               <Search handleSearch={this.onSearchHandler} />
                  
                <div> 
                    <table >

                        {this.renderTableHeader()}
                        {   
                            dataList != null && dataList.length !== 0 && this.renderDataList()
                        }
                    </table>
                </div>

                <Pagination
                    handlePage={this.onChangePageHandler}
                    dataPerPage={dataPerPage}
                    totalPages={totalPages}
                />
               
            </div>
        )
    }
}


export default ListingTable;