import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { CountriesService } from './../../services/countries.service';  


@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.scss']
})
export class CreateCountryComponent implements OnInit {
  formlabel: string = 'Create Country';  
  selectedItem: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private countriesService: CountriesService) { }

  createForm: FormGroup;  
  addBtn: boolean = true;  
  continents = [];

  ngOnInit() {

    this.createForm = this.formBuilder.group({
      id: [],
      continent_id: ['', Validators.required],
      name: ['', [Validators.required, , Validators.maxLength(25)]],
      code: [],
      isd_code: [],
    });
    this.countriesService.getAllContinents().subscribe(data => this.continents = data);
    //If form is edit form
    let id = localStorage.getItem('id');  
    if (+id > 0) {  
      this.countriesService.show(+id).subscribe(data => {  
        console.log(data)
        this.createForm.patchValue(data);
        this.selectedItem = data.continent_id;
      })  
      this.addBtn = false;  
      this.formlabel = 'Edit Country';  
    }    
  }
  
  /**
   * On form submit call a store service
   */
  onSubmit() {
    console.log('save action');
    this.countriesService.store(this.createForm.value)
            .subscribe(data => this.router.navigate(['country']),
                           error => { console.log(error)});
  }

  /**
   * On form update action call a update service
   */
  onUpdate(){

    console.log('update action');
    this.countriesService.update(this.createForm.value)
            .subscribe(data => this.router.navigate(['country']),
                           error => { console.log(error)});

  }

}
