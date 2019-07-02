import { DestinationService } from './destination.service';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'destinations',
    templateUrl:  'destination.component.html',
    styleUrls: ['destination.component.css'],
})
export class DestinationComponent implements OnInit {
//dependency injection - inject the dependecy of this component into the constructor
   constructor(service  :  DestinationService){
     // use the service Class into constructor as a parameter and not as a new object

      let services = new DestinationService();
      this.destinations = services.getDestination();
   }
   
   title = "List of destinations"
   destinations;
   getTitle(){
     return this.title;
   }

  isActive =  false;
  nameButton ="Click me bro";
   toggleClick(){
     if(this.isActive == false){
       this.isActive = true;
       this.nameButton= "Red Click"
     }
     else {
       this.isActive= false;
       this.nameButton = "Green Click"
   }
  }
   ngOnInit(){

   }

}