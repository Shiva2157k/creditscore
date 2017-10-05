import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Popup from './popup';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.state = {creditStatus:{message:"check"}};
        this.handleChange = this.handleChange.bind(this);
        this.setInputValueToState = this.setInputValueToState.bind(this);


    }

    setInputValueToState(event){
        this.setState({value: event.target.value});
    }



    handleChange(event) {

        var self = this;
       const statusURL = `http://localhost:8080/getStatus?score= ${this.state.value}`;


           axios.get(statusURL)
               .then(function (response) {
                   if (response.data) {
                       self.setState({
                           creditStatus: response.data

                       })
                   }
                   console.log(response.data);
               })
               .catch(function (error) {
                   console.log(error);
               });

    }



  render() {
    return (
        <div className="container">
        <div className="row">

            <div className="col-md-10">
            <div className="form-group">

            <label>
                <h2>Enter the Credit Score</h2>
            </label>
                <input className="form-control" type="text" value={this.state.value} onChange={this.setInputValueToState}  />
            </div>


            <input className="btn btn-primary" type="button" value="submit" onClick={this.handleChange}/>
            <Popup message = {this.state.creditStatus.message}/>
                <div>
                    {this.state.creditStatus.message}
                </div>
            </div>
        </div>
        </div>

    );
  }
}

export default App;
