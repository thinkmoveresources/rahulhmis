import { useWindowDimensions, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#2E6194",
    marginHorizontal: 20,
  },
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
    backgroundColor: "#ff9999",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    margin: "2%",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  // container: {
  //   flexDirection: "column",
  //   height: "100%",
  //   width: "100%",
  //   backgroundColor: "#ff474c",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 10,
  // },
  bluebox: {
    width: "80%",
    height: "80%",
    backgroundColor: "#faf0be",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "#171717",
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  formInput: {
    width: 200,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#6ef132",
    padding: 10,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    color: "#2E6194",
  },
  // Flex Styles
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    // marginHorizontal: "auto",
    width: wp("100%"), //Added by me
    backgroundColor: "#004D40",
    flexDirection: "row", //Addeed by me
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  "1col": {
    backgroundColor: "#b2dfdb",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 1,
  },
  "2col": {
    backgroundColor: "#26A69A",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 2,
  },
  "3col": {
    backgroundColor: "#80cbc4",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 3,
  },
  "4col": {
    flext: 4,
    // flexshrink: "shrink",
    // backgroundColor: "#e0f2f1",

    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-around",
    // justify-content: ;
  },
  //Userlist

  btnActionGrp: {
    color: "red",
    width: wp("5%"),
    // alignSelf:true,
    // aspectRatio:1,
    padding: 6,
    // marginTop: 2,
    // marginBottom: 5,
    // width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  containerBtnGrp: {
    backgroundColor: "#120fc7",
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
  },
  containerAwe: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  btnAwe: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  containerBtn: {
    alignItems: "center",
  },
  textBtn: {
    borderWidth: 1,
    padding: 25,
    borderColor: "black",
    backgroundColor: "#FAF0E6",
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#101010",
    marginTop: 60,
    fontWeight: "700",
  },
  listItem: {
    flex: 1,
    backgroundColor: "#ef2ade",

    color: "red",
    width: wp("10%"),
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  metaInfo: {
    flex: 1,
    backgroundColor: "green",

    width: wp("90%"),

    borderWidth: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 18,
    width: 200,
    padding: 10,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#03A9F4",
    borderRadius: 30,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 40,
    color: "white",
  },
});
export { styles };

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
