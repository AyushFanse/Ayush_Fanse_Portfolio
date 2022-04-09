import React from 'react';
import {Route,BrowserRouter, Switch} from "react-router-dom";
import Home from './Home';
import ro from './Pages/NavIcon';

function RouteComponent(){
    return(
       <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/ro" component={ro}></Route>
                    </Switch>
                </BrowserRouter>
       </> 
    )
}

export default RouteComponent;