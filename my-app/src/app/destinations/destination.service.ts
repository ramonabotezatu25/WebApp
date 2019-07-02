import { Component } from '@angular/core';

//when we want to reuse this service for other components
//declare a service class.
//Logic for calling an HTTP service
//a service is a plain typescript class
export class DestinationService{

  getDestination(){
    return [ "Paris", "Bucharest", "NewYork"];
  }

}
