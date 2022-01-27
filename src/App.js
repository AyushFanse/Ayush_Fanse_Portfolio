import React from 'react';
import {Route,BrowserRouter, Switch} from "react-router-dom";
import HomeComponent from './Home';

function RouteComponent(){
    return(
       <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomeComponent}></Route>
                    </Switch>
                </BrowserRouter>
       </> 
    )
}

export default RouteComponent;