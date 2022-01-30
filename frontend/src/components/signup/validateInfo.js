
export default function ValidateInfo(values) {
    let errors = {};
  

  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    } 



    if (!values.password) {
      errors.password = 'Password is required';
    } else if ((values.password.length < 8) || 
                (!/[A-Za-z]+/.test(values.password)) ||
                (!/\d+/.test(values.password)) ) {
      errors.password = 
      'Password needs to be 8 characters or more and contain at least one letter and one number';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    
    if(!values.userrole) {
      errors.userrole = 'Please select "store manager" or "customer" '
    }

    return errors;

  }