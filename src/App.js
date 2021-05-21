import React,{useState} from "react";
import { Nav, Cart } from "./components/"
// import { makeStyles} from "@material-ui/core";



// const useStyles = makeStyles({
//   loading: {
//     padding : "1em",
//     display: "grid",
//     placeContent: "center",
//     width: "100%",
//     minHeight: "100vh",
//     height: "100%",
//   }

// })




function App() {



  // const classes = useStyles()
  // const loading = true

  // if (loading) {
  //   return (
  //     <div className={classes.loading}>
  //         <CircularProgress/>
  //     </div>
  //   )
  // }

 

  return (
    <main>
      <Nav></Nav>
      <Cart></Cart>
    </main>
  );
}

export default App;
