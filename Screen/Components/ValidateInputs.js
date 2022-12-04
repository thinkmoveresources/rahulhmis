const validate = (inputs,ind,txt) => {
  console.log(inputs);
  // const fieldtype = inputs[ind].fieldtype;
  const fieldtype = inputs;
  // console.log(fieldtype);
  // const inputText = inputs[ind].title;
  const inputText = txt;
  console.log(inputText);
  // console.log("Values in Inputs Variable" + fieldtype);
  // /^[a-zA-Z]+$/; ****** only add charaters
  // chekc legnth using (input.length < 5)
  //   /^\S{3,}$/ ******repeat characted only two times
  //   /^(?:(\w)(?!\1\1))+$/ *******no whitespaces allowed dont forgot to add ! ex. if !mailformat.test(inputText)
  //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ***** Email format
  //   /\D/ **** only numaric charactes add !
  //Email errors
  const errors = {};
  //Check Email Input
  if (fieldtype == "email") {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (mailformat.test(inputText)) {
      errors.errors = "Valid Email";
    } else {
      errors.errors = "InvalidInput";
    }
  }
  //   if (!fieldtype_email=='email') {
  //     errors.email = "Check Email";
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.fieldtype_email)
  //   ) {
  //     errors.email = "Invalid email address";
  //   }
  //   //Password Errors
  // //   if (!inputs.password || inputs.password.length < 6) {
  // //     errors.password = "Check Password";
  // //   }
  //   console.log(errors.email);
  console.log(errors);
  return errors;
};
export default validate;
