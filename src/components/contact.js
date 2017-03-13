import React from "react";

export class Address extends React.Component {

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount ")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount ")
    }


    render () {
        console.log("address render");

        return (
            <div>
                <span> City: {this.props.address.city} </span>
                <span> Pincode: {this.props.address.pincode} </span>
            </div>
        )
    }
}

export class Contact extends React.Component {

    constructor(props) {
        super(props);

            this.state = { mainOffice : {
                                    city: 'BLR',
                                    state: 'KA',
                                    pincode: 456456
                                }
                        }   



            this.changePin =   this.changePinHandler.bind(this);         
    }

    changePinHandler() {
        let pincode = Math.ceil(Math.random() * 10000);
        console.log(pincode);

        //wrong

        let mainOffice = this.state.mainOffice;
        mainOffice.pincode = pincode;

        this.setState ({mainOffice})
    }

    render () {
         
        return (<div>
                <h1> Contact Page </h1>
                <Address address={this.state.mainOffice} />


                <button onClick={this.changePin} >Change Pin</button>

                </div>
        )
    }
}