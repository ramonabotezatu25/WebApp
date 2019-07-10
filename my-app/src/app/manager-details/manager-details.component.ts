import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from './../services/data-service.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeInterface } from '../employee.interface';



@Component({
  selector: 'manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.scss']
})
export class ManagerDetailsComponent implements OnInit {

  @Input() detailedInfoManager : EmployeeInterface;
  public formGroup: FormGroup;
  
  

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private dataService : DataService) {

   }

  ngOnInit(): void {
    this.initializeForm();
    
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      firstnameControl: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastnameControl: new FormControl('', [Validators.required, Validators.minLength(5)]),
      projectControl: new FormControl('', [Validators.required, Validators.minLength(2)]),
    })
  }

  submit() {
    if(this.formGroup.valid) {
      console.log("This form is valid");
    }

  }
  


  

}
