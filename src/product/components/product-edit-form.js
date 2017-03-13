import React from 'react'
import { Field, reduxForm } from 'redux-form'

const ProductEditForm = (props) => {
    const {handleSubmit} = props;

    return ( 
            <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                <Field name="firstName" component="input" type="text" placeholder="First Name"/>
                </div>
            </div>
            </form>
    )

}

export default reduxForm({
  form: 'productedit'  // a unique identifier for this form
})(ProductEditForm)