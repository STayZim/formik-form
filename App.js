import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: '',
    },
    onSubmit: values =>{
      console.log('form:', values);

      if(!values.emailField || !values.pswField){
        alert("Please fill out all fields");
        return
      }
      
      alert("Form Submitted Successfully")
      },
    
    validate: values =>{
      let errors = {};
      const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      if(!values.emailField) errors.emailField = 'Field required';
      if(!regex.test(values.emailField)) errors.emailField = 'Username should be an email';
      if(!values.pswField) errors.pswField = 'Field required';

      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div style={{color: 'red'}}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswField ? <div style={{color: 'red'}}>{formik.errors.pswField}</div>: null}
        <button id="submitBtn">Submit</button>
      </form>

    </div>
  );
}

export default App;
