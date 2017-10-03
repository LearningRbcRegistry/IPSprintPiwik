import {Component} from '@angular/core';
import {Angulartics2Piwik} from 'angulartics2';

@Component({
  selector: 'my-app',
  template: `
      <div class="nav-header">
          <h1>{{title}}</h1>
          <nav>
              <a routerLink="/dashboard" routerLinkActive="active" angulartics2On="click"
                 angularticsEvent="MenuDashboard" [angularticsProperties]="{category: 'Menu Nav', label: 'Dashboard'}">Dashboard</a>
              <a routerLink="/heroes" routerLinkActive="active" angulartics2On="click"
                 angularticsEvent="MenuHeroes"
                 [angularticsProperties]="{category: 'Menu Nav', label: 'Heroes'}">Heroes</a>
          </nav>
      </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(
      // inject Angulartics2Piwik to initialize it!!!
      private angulartics2Piwik: Angulartics2Piwik) {
  }

}
