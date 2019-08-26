import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  title="angular-datatables";


  row=[
    { employee: 'John Doe', project: 'LXCO', manager: 'Popescu Ionel'},
    { employee: 'Employee1', project: 'LXCA', manager: 'Manager1'},
    { employee: 'Vasilescu', project: 'LXCA', manager: 'Manager1'}
  ];

  columns=[
    { prop: 'employee'},
    { name: 'project'},
    { name: 'manager'}
  ];

  constructor() { 
    
  }

  ngOnInit() {
    //fetch: 
    // this.fetch((data)=>{
    //   console.log(data);
    //   this.row=data;
    // });
  }

  // fetch(cb){
  //   const req = new XMLHttpRequest();
  //   req.open('GET', 'http:////swimlane.github.io/ngx-datatable/assets/data/company.json');

  //   req.onload=()=> {
  //     const data = JSON.parse(req.response);
  //     cb(data);
  //   };

  //   req.send();
  // }

}
