import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { ContinentsService } from './../../services/continents.service';  


@Component({
  selector: 'app-create-continent',
  templateUrl: './create-continent.component.html',
  styleUrls: ['./create-continent.component.scss']
})
export class CreateContinentComponent implements OnInit {

  formlabel: string = 'Create Continent';  

  constructor(private formBuilder: FormBuilder, private router: Router, private continentsService: ContinentsService) { }

  createForm: FormGroup;  
  addBtn: boolean = true;  

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, , Validators.maxLength(25)]]
    });
    //If form is edit form
    let id = localStorage.getItem('id');  
    if (+id > 0) {  
      this.continentsService.show(+id).subscribe(data => {  
        console.log(data)
        this.createForm.patchValue(data);  
      })  
      this.addBtn = false;  
      this.formlabel = 'Edit Continent';  
    }    
  }
  
  /**
   * On form submit call a store service
   */
  onSubmit() {
    console.log('save action');
    this.continentsService.store(this.createForm.value)
            .subscribe(data => this.router.navigate(['continent']),
                           error => { console.log(error)});
  }

  /**
   * On form update action call a update service
   */
  onUpdate(){

    console.log('update action');
    this.continentsService.update(this.createForm.value)
            .subscribe(data => this.router.navigate(['continent']),
                           error => { console.log(error)});

  }

}
