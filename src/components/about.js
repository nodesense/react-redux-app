import React, {PropTypes} from "react";

import {connect} from "react-redux";

import {addCountry} from "../actions/countries";

let About = ( {title, countries, onAddCountry} ) => {
    let list = countries.map ( c => <li key={c}> {c} </li>);
    let nameInput;

    return (
        <div>
            <h1>{title}</h1>

            <input name="countryName"
                    ref = { (input) => {nameInput=input; }} />

            <button  onClick={() => {
                    onAddCountry(nameInput.value);
                    nameInput.value = "";
                }} >Add</button>

            <ul>
                {list}
            </ul>
        </div>
    )
}

About.propTypes = {
   // title: PropTypes.string.isRequired,
    countries: PropTypes.array.isRequired,
    onAddCountry: PropTypes.func.isRequired
}

let mapStateToProps = (state) => {
    return {
        countries: state.countries 
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddCountry: (name) => dispatch(addCountry(name))
    }
}

About = connect(mapStateToProps, mapDispatchToProps) (About);

export default About;