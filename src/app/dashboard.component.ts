import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';
import {ConfigurePiwikTracker, UsePiwikTracker} from "angular2piwik";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [UsePiwikTracker, ConfigurePiwikTracker]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

    constructor(private heroService: HeroService, private cft: ConfigurePiwikTracker, private upt: UsePiwikTracker) {
        cft.setUserId('test-123');
        cft.setDocumentTitle();
        upt.trackPageView();
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
