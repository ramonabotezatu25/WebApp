import { EmployeeInterface } from './../employee.interface';
import { Injectable, ɵConsole } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public list: EmployeeInterface[] = [];
  public mock: EmployeeInterface = {firstname: "John" , lastname: "Doe", project: "LXCO", position:"manager", team:["Popa Ionel", "Mirel Mirel"]};
  public mock2: EmployeeInterface = {firstname: "Jack" , lastname: "Sparrow", project: "LXCO", position:"manager",  team:["Leustean Frumos", "Patrunjel Barbos"]};
  public newList: EmployeeInterface[] = [];
  public employee : EmployeeInterface;
  constructor() {
    this.list.push(this.mock);
    this.list.push(this.mock2);
   }

  addEmployee(employee: EmployeeInterface) : EmployeeInterface[]{  //topul returnat
    this.list.push(employee);
    return this.list;
  }

  getManagers(): string[]{
    return this.list.filter(item=>item.position==='manager').map(item=>item.lastname + ' ' + item.firstname);

  }

  getManagerFullInfo() : EmployeeInterface[]{
      return this.list;
  }

  getManagerByName(name : string) :EmployeeInterface[] {
    //return this.list.filter(item => item.lastname === name).map(item => item.firstname + ' ' + item.lastname + " " + item.project + " " + item.team);
     this.newList=[];
     this.list.forEach(item =>{
      if(item.lastname.toLowerCase()===name.toLowerCase()){
        this.employee={firstname: item.firstname, lastname: item.lastname , project: item.project, team: item.team, position: item.position};
        this.newList.push(this.employee);
      }
      
    });
   
    return this.newList;
  }
}
