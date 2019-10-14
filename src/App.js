import React, { Component } from 'react';
import Header from './components/header/Header';
import ListingTable from './components/listingTable/ListingTable';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {

  render() {

    const page = 1;
    const headerData = [ 
      { key: 'title', label: 'Title' },
      { key: 'created_at', label: 'Created' }
    ];

    return (
      <div className="App">
          <Header/>
                    
          <ListingTable cols={headerData} pageNumber={page} />

          <Footer/>
      </div>
    );
  }
}

export default App;
