import React, { Component } from 'react';
import './css/Chat.css';
import axios from 'axios';

class Chat extends Component{

	constructor(props){
	    super(props);
	    this.state={
	      user:[],
	      image:[],
	      message:[],
	      time:[]
	    }
	  this.insertMessage = this.insertMessage.bind(this);
	  }

	componentDidMount(){

		axios.get('http://localhost:3004/reports')
        .then(res => {
          const chatData = res.data;
          let user=[];
          let image=[];
          let message=[];
          let time=[];
          chatData.forEach(element => {
          	user.push(element.user);
          	image.push(element.image);
          	message.push(element.message);
          	time.push(element.time);
          });
        this.setState({
				user: user,
				image: image,
				message: message,
				time: time
        	});
         })
        
		}

		componentDidUpdate(){
			document.getElementById("scroll").scrollTop = document.getElementById("scroll").scrollHeight
		}

		createChat(){
			let chatMaker=[];
			for (var i = 0; i < this.state.user.length; i++) {
				
				chatMaker.push(<div className="container-plus">
				  <img src={this.state.image[i]} className="left" alt="Avatar" />
				  <div>
				  <span>{this.state.user[i]}</span>&nbsp;&nbsp;
				  <span className="time">{this.state.time[i]}</span>
				  <p>{this.state.message[i]}</p>
				  </div>
				</div>)
				
			}

			return chatMaker

	}

	insertMessage(e){
		e.preventDefault(); 
		var msg = {
			user: 'NAVER',
			image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
			message: e.target.elements.message.value,
			time: '1 min ago'
		};

		axios.post('http://localhost:3004/reports', msg )
		.then( res => {
			console.log(res);
			console.log(res.data);
		});

		this.setState({
			user: this.state.user.concat(msg.user),
			image: this.state.image.concat(msg.image),
			message: this.state.message.concat(msg.message),
			time: this.state.time.concat(msg.time)
		});

	}



	render(){
		
		return(
		<div className="container mt-3 p-3 col-12 col-sm-12 col-md-5 col-lg-3 shadow" id="teste" style={{backgroundColor:'white', borderRadius:'.90rem'}}>
			<div className="m-3 d-flex">
				<h4 className="mb-0">Reports</h4>
				</div>
			<div className="overflow" id="scroll" style={{height:'500px'}}>
			{this.createChat()}
			</div>
			<div>
				<form className="form-inline" onSubmit={this.insertMessage}>
				<input type="text" className="form-control" name="message" style={{width:'90%'}} placeholder="Type your message here." />
				<button className="btn btn-success" type="submit">Send</button>
				</form>
			</div>

			</div>

			
			)
	}
}

export default Chat;