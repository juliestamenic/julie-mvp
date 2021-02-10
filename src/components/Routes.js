import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from './HomeView';
import PlantSitterForm from './PlantSitterForm';
import PlantOwnerForm from './PlantOwnerForm';
// import DashboardUsers from './DashboardUsers';
import PlantSittingRequests from './PlantSittingRequests';
import PlantSittingOffers from './PlantSittingOffers';


function Routes(props) {
    return (
        <Switch>
            {/* Home: Use 'exact' or else this route will match EVERYTHING */}
            <Route path="/" exact>
                <HomeView />
            </Route>
    
            {/* Plant Sitter */}
            <Route path="/plant-sitter">
                <PlantSitterForm />
            </Route>

            <Route path="/plant-sitting-requests">
                <PlantSittingRequests />
            </Route>
    
            {/* Plant Owner */}
            <Route path="/plant-owner" exact>
                <PlantOwnerForm  />
            </Route>

            <Route path="/plant-sitting-offers">
                <PlantSittingOffers />
            </Route>

            {/* Dashboard Users */}
            {/* <Route path="/dashboard-users">
                <DashboardUsers owners={props.owners} parentCallBack={props.handleOwnerData} sitters={props.sitters} parentCB={props.handleSitterData}/>
            </Route> */}

        </Switch>
    );
}


export default Routes;