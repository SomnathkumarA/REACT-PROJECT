import React, {Component} from "react";
import axios from 'axios';
import './Create.css'


class Create extends Component {
    constructor(props) {
         super(props);
         this.state = {
            id: '',
            address: '',
            gender:'',
            name: '',
            phno:'',
         };
        }

 handleaccidchange = (event) => {
     this.setState({id:event.target.value});   
    };


 handleclientnamechange = (event) => {
     this.setState({address: event.target.value});
    };


 handlebanknamechange = (event) => {
     this.setState({gender: event.target.value});
     };


    handlebranchchange = (event) => {
        this.setState({Timings: event.target.value});
    };


    handlemobilechange = (event) => {
        this.setState({phno: event.target.value});
    };


    handlemailidchange = (event) => {
        this.setState({Fare: event.target.value});
    };




    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            booking_id : this.state.id,
            Customer_name: this.state.address,
            Movie_Name: this.state.gender,
            Timings: this.state.name,
            mobile_no: this.state.phno,
            
        };
        axios.post('http://127.0.0.1:9999/add', data)
    };


    render(){
        return(
    <div className="whole">
    
            <form onSubmit={this.handleSubmit} className="login-form" id="inputdata">
                <label className="login-label">Booking id</label>
                <input 
                    className="login-input"
                    type="text"
                    placeholder="Please Enter the Booking ID"
                    value={this.state.id}
                    onChange={this.handleaccidchange}
                />
                <label className="login-label">Customer Name</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.address}
                    placeholder="Please Enter the Customer Name"
                    onChange={this.handleclientnamechange}
                />
                <label className="login-label">Movie Name</label>
                <input 
                    className="login-input"
                    type="text"
                    placeholder="Please Enter the Movie Name"
                    value={this.state.gender}
                    onChange={this.handlebanknamechange}
                />
                <label className="login-label">name</label>
                <input 
                    className="login-input"
                    type="text"
                    placeholder="Please Enter the Timing"
                    value={this.state.Timings}
                    onChange={this.handlebranchchange}
                />
                <label className="login-label">Mobile Number</label>
                <input 
                    className="login-input"
                    type="number"
                    placeholder="Please Enter your Mobile Number"
                    value={this.state.phno}
                    onChange={this.handlemobilechange}
                />
                
                
                <button className="login-button" type="submit">Add</button>
            </form>
        </div>
        )
    }
}



export default Create;