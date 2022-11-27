export const rules = [
  {
    field: "TEXT_INPUT",
    data: {
      placeholder: "Enter Name",
      maxLength: 50,
      isRequired: true,
      badMessage: "Please Enter Valid Name",
      onBlur: "onBlur",
    },
  },
  {
    field: "TEXT_INPUT1",
    data: {
      placeholder: "Enter Last Name",
      maxLength: 50,
      isRequired: true,
      badMessage: "Please Enter Valid Name",
      onBlur: "onBlur",
    },
  },
  {
    field: "CHECK_BOX",
    data: {
      isRequired: true,
      badMessage: "Please Enter Valid Name",
      title: "I Accept all conditions",
    },
  },

  {
    field: "BUTTON",
    data: {      
      isRequired: true,
      badMessage: "Please Enter Valid Name",
      title: "SUBMIT",
    },
  },
  {
    field: "SWITCH",
  },
  //   Dynamic Fields for Add Group Field
  {
    field: "TEXT_COMPANY",
    data: {
      placeholder: "Enter Company Name",
      maxLength: 50,
      isRequired: true,
      badMessage: "Please Enter Valid Company Name",
     
    },
  },
  {
    field: "TEXT_YEAR",
    data: {
      placeholder: "Enter No Of Years Exp",
      maxLength: 50,
      isRequired: true,
      badMessage: "Please Valid No Of Years",
      
    },
  },
  {
    field: "TEXT_PROFILE",
    data: {
      placeholder: "Enter Designation",
      maxLength: 50,
      isRequired: true,
      badMessage: "Please Enter Valid Designation",
      
    },
  },
  {
    field: "BUTTON_ADD_EXP",
    data: {      
      isRequired: true,     
      title: "ADD",
    },
  },
];
