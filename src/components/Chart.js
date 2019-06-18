import React, { Component } from 'react';
import {Line, Bar} from 'react-chartjs-2';
import axios from 'axios';
 

class Chart extends Component{
	constructor(props){
    super(props);
    this.state={
    chartData:{
      labels: [],
	  datasets: [
	    {
	      label: 'Points',
	      lineTension: 0.1,
	      backgroundColor: 'rgba(75,192,192,0.4)',
	      borderColor: 'rgba(75,192,192,1)',
	      borderCapStyle: 'butt',
	      borderDash: [],
	      borderDashOffset: 0.0,
	      borderJoinStyle: 'miter',
	      pointBorderColor: 'rgba(75,192,192,1)',
	      pointBackgroundColor: '#fff',
	      pointBorderWidth: 1,
	      pointHoverRadius: 5,
	      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
	      pointHoverBorderColor: 'rgba(220,220,220,1)',
	      pointHoverBorderWidth: 2,
	      pointRadius: 4,
	      pointHitRadius: 10,
	      data: []
    }
  ]
    }
    }
  }

    componentDidMount() {
      axios.get('http://localhost:3004/sales')
        .then(res => {
          const pageView = res.data;
          let months = [];
          let view = [];
          pageView.forEach(element => {
             months.push(element.month);
             view.push(element.sales);
          });
          this.setState({ 
            chartData: {
              labels: months,
              datasets:[
                 {
                 	label: 'Points',
			      lineTension: 0.1,
			      backgroundColor: 'rgba(75,192,192,0.4)',
			      borderColor: 'rgba(75,192,192,1)',
			      borderCapStyle: 'butt',
			      borderDash: [],
			      borderDashOffset: 0.0,
			      borderJoinStyle: 'miter',
			      pointBorderColor: 'rgba(75,192,192,1)',
			      pointBackgroundColor: '#fff',
			      pointBorderWidth: 1,
			      pointHoverRadius: 5,
			      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			      pointHoverBorderColor: 'rgba(220,220,220,1)',
			      pointHoverBorderWidth: 2,
			      pointRadius: 4,
			      pointHitRadius: 10,
                    data: view
                 }
              ]
           }
           });
        })
    }


	render(){
		return(
		<div className="container mt-3 p-4 col-12 col-sm-12 col-md-5 col-lg-8 shadow" style={{backgroundColor:'white', borderRadius:'.90rem'}}>
			<h2>Sales</h2>
			<Bar data={this.state.chartData} />
		</div>

		)
	}
}

export default Chart;