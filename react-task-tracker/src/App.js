import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import ErrorPage from "./components/ErrorPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <Router>
    <div className="app">
     <Navbar /> 
     <div className="content">
       <Switch>
         <Route exact path="/">
         <Home />
         </Route>
         <Route path="/create">
           <Create />
         </Route>
         <Route path="/blogs/:id">
           <BlogDetails />
         </Route>
         <Route path="*">
           <ErrorPage />
         </Route>
       </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
  