import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import {Continent, Status} from "./../model/continent.model";

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {

  status: any = Status; //assign the enum status
  constructor(private http: HttpClient) {

   }

  baseUrl: string = window.location.hostname + "/tripbylocal/api/public/index.php/dashboard/continent";

  /**
   * List all Continents
   */
  index(){
    
    return this.http.get<Continent[]>(this.baseUrl);
  }

  /**
   * Store the continent data 
   * @param continent
   */
  store(continent: Continent){

    this.status = Status[0];
    continent.status = this.status;

    return this.http.post(this.baseUrl + '/store', continent);
  }

  /**
   * Get and show the continent detail based on id
   * @param id 
   */
  show(id: number){

    return this.http.get<Continent>(this.baseUrl + '/show/' + id);
  }

  /**
   * Update continent data
   * @param continent 
   */
  update(continent: Continent){
    
    return this.http.put(this.baseUrl + '/update/' + continent.id, continent);
  }
}
