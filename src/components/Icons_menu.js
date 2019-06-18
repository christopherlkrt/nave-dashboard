import React, { Component } from 'react';
import '../App.css';

class Icons_menu extends Component{

  constructor(props){
    super(props);
    this.state={
      items:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:3004/information')
    .then(res => res.json())
    .then(json => {
      this.setState({
        items:json
      })
    });

  }


  render() {
    var {items} = this.state;
    return (
      <div className="Menu-component">
      <h1>Dashboard</h1>
        <div className="row justify-content-around">
          <div className="bg-visit d-flex flex-row p-3 col-10 col-sm-6 col-md-4 col-lg-2 justify-content-center m-2 align-center shadow" style={{borderRadius:'.90rem', minWidth:'200px'}}>
            <div className="mr-5">
              <i className="fas fa-eye"></i>
            </div>
            <div className="text-right">
              <span className="counter"><strong>{items.visitors}</strong></span><br/>
              <span>New Visitors</span>
            </div>
          </div>
          <div className="bg-users d-flex flex-row p-3 col-10 col-sm-6 col-md-4 col-lg-2 justify-content-center m-2 align-center shadow" style={{borderRadius:'.90rem', minWidth:'200px'}}>
            <div className="mr-5">
              <i className="fas fa-users"></i>
            </div>
            <div className="text-right">
              <span className="counter"><strong>{items.users}</strong></span><br/>
              <span>New Users</span>
            </div>
          </div>
          <div className="bg-sales d-flex flex-row p-3 col-10 col-sm-6 col-md-4 col-lg-2 justify-content-center m-2 align-center shadow" style={{borderRadius:'.90rem', minWidth:'200px'}}>
            <div className="mr-5">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div className="text-right">
              <span className="counter"><strong>{items.sales}</strong></span><br/>
              <span>New Sales</span>
            </div>
          </div>
          <div className="bg-orders d-flex flex-row p-3 col-10 col-sm-6 col-md-4 col-lg-2 justify-content-center m-2 align-center shadow" style={{borderRadius:'.90rem', minWidth:'200px'}}>
            <div className="mr-5">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="text-right">
              <span className="counter"><strong>{items.orders}</strong></span><br/>
              <span>New Orders</span>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Icons_menu;