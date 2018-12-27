import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { CitiesService } from './../../services/cities.service';  

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.scss']
})
export class CreateCityComponent implements OnInit {
  formlabel: string = 'Create City';  
  selectedContinent: any;
  selectedCountry: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private citiesService: CitiesService) { }

  createForm: FormGroup;  
  addBtn: boolean = true;  
  continents = [];
  countries = [];

  ngOnInit() {

    this.createForm = this.formBuilder.group({
      id: [],
      continent_id: ['', Validators.required],
      country_id: ['', Validators.required],
      name: ['', [Validators.required, , Validators.maxLength(25)]],
    });
    this.citiesService.getAllContinents().subscribe(data => this.continents = data);
    //If form is edit form
    let id = localStorage.getItem('id');  
    if (+id > 0) { 
       
      this.citiesService.show(+id).subscribe(data => {  
        
        this.citiesService.getCountries(data.continent_id).subscribe(data =>{ this.countries = data; });

        this.createForm.patchValue(data);
        // this.selectedContinent = data.continent_id;
        // this.selectedCountry = data.country_id;
      })  
      this.addBtn = false;  
      this.formlabel = 'Edit City';  
    }    
  }
  /**
   * on select change countries
   * @param continent_id 
   */
  onSelect(continent_id) {
    // console.log(continent_id);
    this.citiesService.getCountries(continent_id).subscribe(data =>{ this.countries = data;});
  }

  /**
   * On form submit call a store service
   */
  onSubmit() {
    console.log('save action');
    this.citiesService.store(this.createForm.value)
            .subscribe(data => this.router.navigate(['city']),
                           error => { console.log(error)});
  }

  /**
   * On form update action call a update service
   */
  onUpdate(){

    console.log('update action');
    this.citiesService.update(this.createForm.value)
            .subscribe(data => this.router.navigate(['city']),
                           error => { console.log(error)});

  }
}
