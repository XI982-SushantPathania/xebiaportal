//route configuration
import React from "react";
import {Home}  from "./home";
import {Menu} from "./Menu";
import {Details} from "./Details";
import history from './history';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {App}from "./App";
// functional component
export default function Routes(props) {
   return (
       <BrowserRouter history={history} forceRefresh={true}>
           <App>
               <Switch>
                   <Route path="/" exact  component={Home} />
                   <Route path='/Menu'   component={Menu} />
                   <Route path='/Details' component={Details} />
               </Switch>
           </App>
       </BrowserRouter>
   )
}