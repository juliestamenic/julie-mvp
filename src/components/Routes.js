import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from './HomeView';
import PlantSitterForm from './PlantSitterForm';
import PlantOwnerForm from './PlantOwnerForm';
import Test from './Test';
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

            {/* <Route path="/test">
                <Test sitters={props.sitters} owners={props.owners} user={props.user} />
            </Route> */}


        </Switch>
    );
}
//component={PlantSitterForm} 
// onAddSitter={props.addSitter}


export default Routes;