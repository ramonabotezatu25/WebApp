import { DataServiceService } from './../services/data-service.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  public formGroup: FormGroup;
  public managersList: string[] =[];
  constructor(private formBuilder: FormBuilder, private dataService: DataServiceService) { }

  ngOnInit() {
    this.initalizeForm();
    this.managersList=this.dataService.getManagers();
  }

  initalizeForm() {
    this.formGroup = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname:  new FormControl('', [Validators.required, Validators.minLength(2)]),
      project:  new FormControl('', [Validators.required, Validators.minLength(2)]),
      position: new FormControl(null, Validators.required),
      manager: new FormControl('')
    });
  }

  submit() {
    if(this.formGroup.valid){
      this.dataService.addEmployee(this.formGroup.value);
      this.formGroup.reset();
    }
    console.log(this.dataService.list);
    this.managersList = this.dataService.getManagers();
  }





}
