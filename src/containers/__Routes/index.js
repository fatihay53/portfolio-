import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Route Setting
import HomePage from "../HomePage";
// import HomePage2 from "../HomePage2";

import AboutPage from "../AboutPage";
import PorfolioGrid from "../PorfolioGrid";



import ProjectDetails from "../ProjectDetails";


import ContactPage from "../ContactPage";


// Normal Route
import PrivateRoute from "../_PrivateRoute";
import PublicRoute from "../_PublicRoute";

export default function Routes() {
    return (
        <Switch>
            <PublicRoute
                exact
                path="/"
                component={HomePage}
            />
            <PrivateRoute
                path="/home"
                component={HomePage}
            />
            {/* <PrivateRoute
                path="/home2"
                component={HomePage2}
            /> */}
          
            <PrivateRoute
                path="/about"
                component={AboutPage}
            />
            <PrivateRoute
                path="/protfolioGrid"
                component={PorfolioGrid}
            />
           
            <PrivateRoute
                path="/projectDetails"
                component={ProjectDetails}
            />
      
            <PrivateRoute
                path="/contact"
                component={ContactPage}
            />
          
            <Route exact component={HomePage} />
        </Switch>
    );
}
