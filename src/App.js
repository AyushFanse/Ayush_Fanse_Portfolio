import React from 'react';
import {Route,BrowserRouter, Switch} from "react-router-dom";
import Home from './Home';

function RouteComponent(){
    return(
       <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                    </Switch>
                </BrowserRouter>
       </> 
    )
}

export default RouteComponent;