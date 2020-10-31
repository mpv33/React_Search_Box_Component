import React from 'react';

import './App.css';

import NamesContainer from './NamesContainer';

class App extends React.Component {

  state = {
    names: [
      'Adobe',
      'Amazon',
      'Amdocs',
      'BMC Software',
      'Cisco Systems',
      'Dell EMC',
      'Google',
      'Hewlett-Packard (HP)',
      'IBM',
      'Intel',
      'Microsoft Corporation',
      'Oracle',
      'Paypal',
      'Pegasystems',
      'Red Hat Software',
      'Salesforce',
      'SAP SE',
      ' Symantec Software company',
      'VMware Inc',
      'TCS',
      'Wipro',
      'MindTree',
      'TATA Group',
      'Larsen & Toubro',
      'Thyssen Krupp',
      'Siemens',
      'Suzlon',
      'Bosch India'

    ],
    searchTerm: '',
    openSearch: false
  }

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).slice(0, 10)
  }

  OpenSaerch = () => {
    this.setState({ openSearch: true })
  }

  CloseSearch = () => {
    this.setState({ openSearch: false })
  }
  AddNewCompany = () => {
    var company = prompt("Please enter company name:");
    if (company == null || company == "") {
      console.log('wrong name')
    } else {
      this.state.names.push(company)
    }
  }


  render() {
    return (
      <div>
        <h1 class="search-title">  Search Your MNC  </h1>
        <div class="company-container">
          <div class={'SearchContainer' + (this.state.openSearch ? ' SearchActive' : '')}>
            <input className="box" type='text' onFocus={this.OpenSaerch} onBlur={this.CloseSearch} value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='Search name of Top MNC' />
            <NamesContainer searchKey={this.state.searchTerm} isShow={this.state.openSearch} names={this.dynamicSearch()} />
          </div>
          <button class="add-new-company" onClick={this.AddNewCompany}>ADD +</button>
        </div>
      </div>
    );
  }
}

export default App;