import { EmployeeInterface } from './../employee.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public list: EmployeeInterface[] = [];
  
  constructor() { }

  addEmployee(employee: EmployeeInterface) : EmployeeInterface[]{  //topul returnat
    this.list.push(employee);
    return this.list;
  }

  getManagers(): string[]{
    return this.list.filter(item=>item.position==='manager').map(item=>item.lastname + ' ' + item.firstname);

  }
}
