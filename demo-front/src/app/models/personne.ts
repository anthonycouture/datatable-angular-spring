export class Personne {
  id: number;
  nom: string;
  prenom: string;
  age: number;


  constructor(id: number, nom: string, prenom: string, age: number) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }
}
