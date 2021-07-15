import { Component, OnInit } from '@angular/core';
import {PersonneService} from "../../services/personne.service";
import {Personne} from "../../models/personne";
import {Subject} from "rxjs";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listPersonne: Personne[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.personneService.getAllPersonnes().subscribe(
      (data) => {
        console.log(data);
        this.listPersonne= data;
        this.dtTrigger.next();
      },
      (error) => console.error(error)
    );
  }
}
