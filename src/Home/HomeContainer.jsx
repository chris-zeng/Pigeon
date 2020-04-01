import React from 'react'
import Map from '../Map'

export default class HomeContainer extends React.Component{
    state = {
        longitude:null,
        latitude:null,
    }
    __loadOrders = () =>{
        fetch("https://pigeon1.herokuapp.com/readOrder", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
        }
        }).then(response=>{
            return response.json();
        }).then(res =>{
            console.log(res);
        });
    }

    componentDidMount(){
        let longitude = localStorage.getItem("longitude");
        let latitude = localStorage.getItem("latitude");
        console.log("component did mount", longitude, latitude);
        this.setState({longitude});
        this.setState({latitude});
        this.__loadOrders();
      }
    render(){
        if(!this.state.longitude && !this.state.longitude){
            return (<div> <h1>Please turn on location from your browser settings and refresh this page</h1> </div>);
          }
        return(
            <React.Fragment>
                <Map center = {[this.state.latitude, this.state.longitude]}/>
            </React.Fragment>
        );
    }
} 