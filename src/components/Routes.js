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
            <Route exact path="/plant-sitter"
            render = {() => <PlantSitterForm addSitter={props.addSitter()}/>}>
            </Route>

            <Route path="/plant-sitting-requests">
                <PlantSittingRequests owners={props.owners}  />
            </Route>
    
            {/* Plant Owner */}
            <Route exact path="/plant-owner"
            render = {() => <PlantOwnerForm addOwner={props.addOwner()}/>}>
            </Route>

            <Route path="/plant-sitting-offers">
                <PlantSittingOffers sitters={props.sitters}/>
            </Route>

            {/* Dashboard Users */}
            {/* <Route path="/dashboard-users">
                <DashboardUsers owners={props.owners} parentCallBack={props.handleOwnerData} sitters={props.sitters} parentCB={props.handleSitterData}/>
            </Route> */}

        </Switch>
    );
}
//component={PlantSitterForm} 
// onAddSitter={props.addSitter}


export default Routes;