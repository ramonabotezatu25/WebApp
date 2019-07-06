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

  onButtonClick(event:string) {
    const route = event.toLowerCase();
    this.router.navigate([route]);
  }

}
