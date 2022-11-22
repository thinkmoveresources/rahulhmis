import ReactFlexyTable from "react-flexy-table";
// import "react-flexy-table/dist/index.css";
import "react-flexy-table/dist/index.css"
const Flextab = () => {
  const data = [
    {
      id: 1,
      name: "Rajesh Khanna",
      dateOfRegistration: "20-10-2020",
      lastSignIn: "9:15",
      numberOfPatients: "21",
  
    },
    {
      id: 2,
      name: "Akshay kumar",
      dateOfRegistration: "21-10-2020",
      lastSignIn: "10:15",
      numberOfPatients: "25",
  
    },
    {
      id: 3,
      name: "Raj Kapoor",
      dateOfRegistration: "19-10-2020",
      lastSignIn: "3:15",
      numberOfPatients: "20",
  
    },
    {
      id: 4,
      name: "Dilip Kumar",
      dateOfRegistration: "05-10-2020",
      lastSignIn: "7:15",
      numberOfPatients: "19",
  
    },
    {
      id: 1,
      name: "Rajesh Khanna",
      dateOfRegistration: "20-10-2020",
      lastSignIn: "9:15",
      numberOfPatients: "21",
  
    },
    {
      id: 2,
      name: "Akshay kumar",
      dateOfRegistration: "21-10-2020",
      lastSignIn: "10:15",
      numberOfPatients: "25",
  
    },
    {
      id: 3,
      name: "Raj Kapoor",
      dateOfRegistration: "19-10-2020",
      lastSignIn: "3:15",
      numberOfPatients: "20",
  
    },
    {
      id: 1,
      name: "Rajesh Khanna",
      dateOfRegistration: "20-10-2020",
      lastSignIn: "9:15",
      numberOfPatients: "21",
  
    },
    {
      id: 2,
      name: "Akshay kumar",
      dateOfRegistration: "21-10-2020",
      lastSignIn: "10:15",
      numberOfPatients: "25",
  
    },
    {
      id: 3,
      name: "Raj Kapoor",
      dateOfRegistration: "19-10-2020",
      lastSignIn: "3:15",
      numberOfPatients: "20",
  
    },
    {
      id: 4,
      name: "Dilip Kumar",
      dateOfRegistration: "05-10-2020",
      lastSignIn: "7:15",
      numberOfPatients: "19",
  
    },
    {
      id: 1,
      name: "Rajesh Khanna",
      dateOfRegistration: "20-10-2020",
      lastSignIn: "9:15",
      numberOfPatients: "21",
  
    },
    {
      id: 2,
      name: "Akshay kumar",
      dateOfRegistration: "21-10-2020",
      lastSignIn: "10:15",
      numberOfPatients: "25",
  
    },
    {
      id: 3,
      name: "Raj Kapoor",
      dateOfRegistration: "19-10-2020",
      lastSignIn: "3:15",
      numberOfPatients: "20",
  
    },
    {
      id: 4,
      name: "Dilip Kumar",
      dateOfRegistration: "05-10-2020",
      lastSignIn: "7:15",
      numberOfPatients: "19",
  
    }
  ];

  return <ReactFlexyTable data={data} sortable />;
};

export default Flextab;
