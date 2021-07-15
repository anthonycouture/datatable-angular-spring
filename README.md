# Initialisation du back (Spring boot)

Téléchargement du back sur le site https://start.spring.io/

J'ai choisi la version de spring boot 2.5.2 avec un packaging en Jar pour la version 11 de Java.

De plus j'ai chosi comme dépendance :
- Spring Web
- Spring Data JPA
- PostgreSQL Driver

Donc cela à rajouter ces dépendances au pom.xml:
```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>

<dependency>
	<groupId>org.postgresql</groupId>
	<artifactId>postgresql</artifactId>
	<scope>runtime</scope>
</dependency>
```

Dans la base de données créer la table personne avec des personnes :
```sql
create table personne
(
	id serial
		constraint personne_pk
			primary key,
	nom varchar not null,
	prenom varchar not null,
	age int not null
);

insert into personne (nom, prenom, age) values ('Dupont', 'Jean', 20);
insert into personne (nom, prenom, age) values ('Dubois', 'Louis', 35);
insert into personne (nom, prenom, age) values ('Durand', 'Pierre', 45);
```

Dans le fichier application.properties modifier ces lignes :
- spring.datasource.url=jdbc:postgresql://localhost:5432/postgres --> modifier l'url pour arriver sur votre bdd
- spring.datasource.username=postgres --> modifier pour mettre le user de votre bdd
- spring.datasource.password=password --> modifier pour mettre le password de votre base

Ensuite démarrer le projet, la seule URL qui fonctionne est http://localhost:8080 qui retourne la liste des personnes.

# Initialisation du front (Angular 12)
Pour l'Initialisation j'ai entré cette commande dans un terminal : `ng new demo-front` ensuite j'ai dit "oui" pour le routing et j'ai choisi CSS pour le style.



**Ajouter les datatables**

il y a une installation automatique : `ng add angular-datatables`  

Ou une installation manuel :

A la racine du projet front entrer cette commande pour ajouter des datatables :
```sh
npm install jquery --save
npm install datatables.net --save
npm install datatables.net-dt --save
npm install angular-datatables --save
npm install @types/jquery --save-dev
npm install @types/datatables.net --save-dev
```

Modifier le fichier angular.json pour qu'il intègre ces lignes :
```json
"projects": {
    "your-app-name": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/datatables.net-dt/css/jquery.dataTables.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.js",
              "node_modules/datatables.net/js/jquery.dataTables.js"
            ],
						...
          }
}
```

Importer DataTablesModule dans le fichier **app.module.ts** :
```ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from "angular-datatables";
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Voila dataTables est installé sur notre application angular.

## Création du component contenant la page d'accueil

Dans le dossier **src/app** créer un dossier **page** dans celui-ci entrer la commande `ng generate component accueil`

Qui dit application angular dit souvent plusieurs pages donc le routing est utilise mettons le en place :  
Dans le fichier fichier **app.component.html** effacer tout et insérer cela :
```html
<router-outlet></router-outlet>
```

Puis modifier le fichier **app-routing.module.ts** et dans le tableau de route ajouter la route principal notre page d'accueil :
```ts
const routes: Routes = [
  {
    path :'',
    component: AccueilComponent
  }
];
```

Ensuite démarrer le serveur avec la commande `ng serve` puis accèder à l'URL http://localhost:4200 et il sera écrit "accueil works!" message contenu dans le html du component accueil

## Appeler notre back avec notre front
`ng generate service personne`
