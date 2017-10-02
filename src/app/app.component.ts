import {Component} from '@angular/core';
import {ConfigurePiwikTracker, UsePiwikTracker} from "angular2piwik";

declare var _paq: any;

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active" data-track-content data-content-name="menu"
               data-content-piece="dashbaord">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active" data-track-content data-content-name="My Product Name"
               data-content-piece="heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css'],
    providers: [UsePiwikTracker, ConfigurePiwikTracker]
})
export class AppComponent {
    title = 'Tour of Heroes';

    constructor(private cft: ConfigurePiwikTracker, private upt: UsePiwikTracker) {
        cft.setUserId('test-123');
        cft.setDocumentTitle();
        upt.trackPageView();
    }
}
