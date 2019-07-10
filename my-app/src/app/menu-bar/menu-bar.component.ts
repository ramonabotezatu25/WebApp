import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  public list: string[] = [];

  constructor(private router: Router) { }
  
ngOnInit() {
    this.list.push('Dashboard');
    this.list.push("Managers");
    this.list.push("Employees");

  }

  openMenu(event:string) {
    if(!document.getElementById(event.toLowerCase()).classList.contains('bold')){
      document.getElementById(event.toLowerCase()).classList.add('bold');
    } else {
       document.getElementById(event.toLowerCase()).classList.remove('bold');
      }
    
    const route = event.toLowerCase();
    this.router.navigate([route]);
    
  }

}
