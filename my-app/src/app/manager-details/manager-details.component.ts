import { DataService } from './../services/data-service.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeInterface } from '../employee.interface';



@Component({
  selector: 'manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.scss']
})
export class ManagerDetailsComponent implements OnInit {

  @Input() detailedInfoManager : EmployeeInterface;
  

  constructor(private route: ActivatedRoute,
              private dataService : DataService,
              private location: Location
              ) { }

  ngOnInit(): void {
    console.log(this.detailedInfoManager);
    
  }
  


  

}
