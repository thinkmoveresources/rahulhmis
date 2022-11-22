import { useWindowDimensions,StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  placeholderStyles: {
    color: "grey",
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: 200,
    marginBottom: 15,
  },
    button: {
      width: 200,
      padding: 5,
      backgroundColor: '#ff9999',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 15,
      alignSelf: 'center',
      margin: "2%",
    },
    buttonText: {
      fontSize:20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    container: {
        flexDirection: 'column',
      height: '100%',
      width: '100%',
      backgroundColor: '#ff474c',
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: "center",
      borderRadius:10,
    },
    bluebox: {
        width: '80%',
        height: '80%',
        backgroundColor: '#faf0be',
        justifyContent: 'center',
      alignItems: "center",
      borderRadius:30,
      shadowColor: '#171717',
    shadowOffset: {width: 10, height: 20},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    
     },
    formInput: {
      width: 200,
      fontSize:18,
      borderWidth: 1,
      borderColor:'#6ef132',
      padding: 10,
      margin: 5,
      backgroundColor: 'white',
      borderRadius: 15,
      
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
      margin: 10,
      fontWeight: 'bold',
      color: '#2E6194',
    }
  });
  export { styles }

//   const useStyle = () => {
//     const dimensions = useWindowDimensions();
//     console.log('Logging dimensions', dimensions)

//     const styles = StyleSheet.create({
//       button: {
//         width: 200,
//         padding: 5,
//         backgroundColor: '#ff9999',
//         borderWidth: 2,
//         borderColor: 'white',
//         borderRadius: 15,
//         alignSelf: 'center',
//         margin: "2%",
//       },
//       buttonText: {
//         fontSize:20,
//         color: 'white',
//         fontWeight: 'bold',
//         textAlign: 'center',
//       },
//       container: {
//           flexDirection: 'column',
//         height: '100%',
//         width: '100%',
//         backgroundColor: '#ff474c',
//         alignItems: 'center',
//         justifyContent: 'center',
//         alignItems: "center",
//         borderRadius:10,
//       },
//       bluebox: {
//           width: '80%',
//           height: '80%',
//           backgroundColor: '#faf0be',
//           justifyContent: 'center',
//         alignItems: "center",
//         borderRadius:30,
//         shadowColor: '#171717',
//       shadowOffset: {width: 10, height: 20},
//       shadowOpacity: 0.5,
//       shadowRadius: 5,
      
//        },
//       formInput: {
//         width: 300,
//         fontSize:18,
//         borderWidth: 1,
//         borderColor:'#6ef132',
//         padding: 10,
//         margin: 5,
//         backgroundColor: 'white',
//         borderRadius: 15,
        
//       },
//       text: {
//         textAlign: 'center',
//         fontSize: 20,
//         margin: 10,
//         fontWeight: 'bold',
//         color: '#2E6194',
//       }
//     })
  
//     return { styles }
// }

