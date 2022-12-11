const validate = (inputs,txt,fieldlenght) => {
  // console.log(inputs);
  // const fieldtype = inputs[ind].fieldtype;
  const fieldtype = inputs;
  // console.log(fieldtype);
  // const inputText = inputs[ind].title;
  const inputText = txt;
  // console.log(inputText);
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
  } else if (fieldtype == "numeric") {
    var mailformat = /\D/;

    if (!mailformat.test(inputText)) {
      errors.errors = "Valid Email";
    } else {
      errors.errors = "InvalidInput";
    }
  } else if (fieldtype == "NoSpace") {
    var mailformat = /^(?:(\w)(?!\1\1))+$/;

    if (mailformat.test(inputText)) {
      errors.errors = "Valid Email";
    } else {
      errors.errors = "InvalidInput";
    }
  } else if (fieldtype == "OnlyCharacter") {
    var mailformat = /^[A-Za-z\s]*$/;

    if (mailformat.test(inputText)) {
      errors.errors = "Valid Email";
    } else {
      errors.errors = "InvalidInput";
    }
  } else if (fieldtype == "AlphaNum") {
    var mailformat = /^([a-zA-Z0-9_-])+$/;

    if (mailformat.test(inputText)) {
      errors.errors = "Valid Email";
    } else {
      errors.errors = "InvalidInput";
    }
  }
  
  return errors;
};
export default validate;
