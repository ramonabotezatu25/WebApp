import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  public title: string = 'Ramona';
  public viewMode: string = "employees";
  public formGroup: FormGroup;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    // this.formGroup = this.formBuilder.group({});
  }


  ngOnDestroy() {
    console.log('on destroy');
    
  }


}
