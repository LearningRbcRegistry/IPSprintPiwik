import { Component }          from '@angular/core';
import { Angulartics2Piwik } from 'angulartics2';
import { NgModule }      from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(
      // inject Angulartics2Piwik to initialize it!!!
      private angulartics2Piwik: Angulartics2Piwik
  ) { console.log("coucou");}

}
