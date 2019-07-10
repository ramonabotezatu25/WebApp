import { DataService } from './../services/data-service.service';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { EmployeeInterface } from '../employee.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent implements OnInit{

  public managers : EmployeeInterface[] = [];
  public selectedManager : boolean = false;
  public dataToSend : EmployeeInterface[] =[];
  public objectToSend : EmployeeInterface;

  constructor(private service: DataService, private router: Router) { 
    this.managers = service.getManagerFullInfo();
  }

  onSelectedManager(event) {
    //TO DO :  cand dai click pe un item si apoi selectezi altul tot dispare info
    this.selectedManager = !this.selectedManager;
    if(this.selectedManager === true) {
      this.dataToSend = this.service.getManagerByName(event);
    }
  }
  
  ngOnInit() {
    console.log(this.selectedManager);
  }






}
