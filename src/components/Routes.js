import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from './HomeView';
import PlantSitterForm from './PlantSitterForm';
import PlantOwnerForm from './PlantOwnerForm';
// import Test from './Test';
import PlantSittingRequests from './PlantSittingRequests';
import PlantSittingOffers from './PlantSittingOffers';
import PlantSittingResults from './PlantSittingResults';


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
                <PlantSittingRequests sitter={props.sitter} owners={props.owners} />
            </Route>
    
            {/* Plant Owner */}
            <Route exact path="/plant-owner"
            render = {() => <PlantOwnerForm addOwner={props.addOwner()}/>}>
            </Route>

            <Route path="/plant-sitting-offers">
                <PlantSittingOffers owner={props.owner} sitters={props.sitters}/>
            </Route>

            <Route path="/plant-sitting-results">
                <PlantSittingResults users={props.users} me={props.me} />
            </Route>


        </Switch>
    );
}
//component={PlantSitterForm} 
// onAddSitter={props.addSitter}


export default Routes;