import React, { Component } from 'react'

class Pagination extends Component {

    nextPage = () => {
        let currentPage = this.props.currentPageNum + 1;
        this.props.handlePage(currentPage)
      }
    
      previousPage = () => { 
        let currentPage = this.props.currentPageNum - 1;
        this.props.handlePage(currentPage)
      };
    
 
  render () {
    let { currentPageNum, totalPages } = this.props;
 
      return (
        <div>
          
            <button onClick={this.previousPage.bind(this)}>Previous</button>
            <span> Page {currentPageNum} of {totalPages} </span>
            <button onClick={this.nextPage.bind(this)}>Next</button>
        </div>
      );

  }
}

export default Pagination;
