import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Personne} from "../models/personne";

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private URL = environment.urlBack;

  constructor(private http: HttpClient) { }

  getAllPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.URL);
  }
}
