import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar"; // Import the Navbar component
import NewsList from "./NewsList";
import Home from "./Home"; // Example: Create a Home component for your home page

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={NewsList} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState("");

//   useEffect(() => {
//     axios
//       .get("/api/data")
//       .then((response) => {
//         setData(response.data.message);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>React App</h1>
//       <p>Data from Express: {data}</p>
//     </div>
//   );
// }

// export default App;

// -----

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
