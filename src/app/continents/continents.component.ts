import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ContinentsService } from './../services/continents.service';  
import {Continent, Status} from "./../model/continent.model";

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.scss']
})
export class ContinentsComponent implements OnInit {

  continents: Continent[];

  constructor(private router: Router, private continentService: ContinentsService) { }

  ngOnInit() {

    //get the all continents data
    this.continentService.index().subscribe(data => this.continents = data);
  }

  /**
   * redirect to create continent view page
   */
  create(): void{

    if(localStorage.getItem("id") !== null)localStorage.removeItem('id');  

    this.router.navigate(['continent/create']);
  }

  /**
   * 
   * @param continent redirect to edit 
   */
  edit(continent: Continent): void{

    if(localStorage.getItem("id") !== null)localStorage.removeItem('id');  

    localStorage.setItem('id', continent.id.toString());  
    this.router.navigate(['continent/create']);
  }
}
