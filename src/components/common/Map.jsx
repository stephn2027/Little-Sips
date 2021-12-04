import React,{useState,useCallback} from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  
  
 

export default function Map(){
    
    
      const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={17}
          defaultCenter={{ lat: 40.747710464755485,lng: -74.14927325916791 }}
        >
          <Marker
            position={{ lat: 40.747710464755485,lng: -74.14927325916791 }}
          />
        </GoogleMap>
      ));
     

    return (
        <React.Fragment>
       <MapWithAMarker
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrTUBLG3EvOAlqY5EdAH3gbWdRa-X6bg0&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `500px`  }} />}
    mapElement={<div style={{ height: `100%`,borderRadius:`7px` }} />}
  />


      </React.Fragment>

    )
}
