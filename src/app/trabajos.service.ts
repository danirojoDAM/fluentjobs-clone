import { Injectable } from '@angular/core';
import { Trabajo } from './trabajo';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class TrabajosService {
  private URL = "https://clonefluentjobs.firebaseio.com/trabajos"

  constructor(private http: HttpClient) { }

  getTrabajos() {

  }
  getTrabajo(){

  }
  saveTrabajos() {

  }
  deleteTrabajo() {

  }
  updateTrabajo(){
    
  }
}
