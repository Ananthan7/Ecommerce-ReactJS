import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
// import App from "./App";
import Routes from "./Routes"



ReactDOM.render(<Routes />, document.getElementById("root"));
// const routing = (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//       </ul>
//     </div>
//     <Switch>
//       <Route exact path="/" component={App} />
//       <Route exact path="/" component={Home} />
//     </Switch>
//   </Router>
// );