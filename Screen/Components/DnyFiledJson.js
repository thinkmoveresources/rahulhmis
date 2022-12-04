export const rules = [
  {
    field: "TEXT_INPUT",
    data: {
      id:1,
    fieldname:"name",
      placeholder: "Enter Name",
      maxLength: 50,
      isRequired: true,
      badMessage: "Please Enter Valid Name",
      onBlur: "onBlur",
    },
  },
  {
    field: "TEXT_INPUT",
    data: {
      id:2,
        fieldname:"surname",
      placeholder: "Enter Name",
      maxLength: 50,
      isRequired: false,
      badMessage: "Please Enter Valid Surname",
      onBlur: "onBlur",
    },
  },
  {
    field: "TEXT_INPUT1",
    data: {
      id:3,
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
      id:4,
      isRequired: true,
      badMessage: "Please Enter Valid Name",
      title: "I Accept all conditions",
    },
  },

  {
    field: "BUTTON",
    data: {
      id:5,
      isRequired: true,
      badMessage: "Please Enter Valid Name",
      title: "SUBMIT",
    },
  },
  {
    field: "SWITCH",
    data: {id:6},
  },
  //   Dynamic Fields for Add Group Field
  {
    field: "TEXT_COMPANY",
    data: {
      id:7,
      placeholder: "Enter Company Name",
      maxLength: 50,
      isRequired: true,
      badMessage: "Please Enter Valid Company Name",
    },
  },
  {
    field: "TEXT_YEAR",
    data: {
      id:8,
      placeholder: "Enter No Of Years Exp",
      maxLength: 50,
      isRequired: true,
      badMessage: "Please Valid No Of Years",
    },
  },
  {
    field: "TEXT_PROFILE",
    data: {
      id:9,
      placeholder: "Enter Designation",
      maxLength: 50,
      isRequired: true,
      badMessage: "Please Enter Valid Designation",
    },
  },
  {
    field: "BUTTON_ADD_EXP",
    data: {
      id:10,
      isRequired: true,
      title: "ADD",
    },
  },
];
