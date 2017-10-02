import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Angulartics2} from 'angulartics2';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location,
      private angulartics2Piwik: Angulartics2
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
        .subscribe(hero => this.hero = hero);
  }

  save(): void {
      console.log('SAVE DETAIL HERO');
      this.angulartics2Piwik.eventTrack.next({
          action: 'hero-detail',
          properties: {category: 'hero detail', label: 'save'}
      });
      console.log('SAVE DETAIL HERO AFTER');
    this.heroService.update(this.hero)
        .then(() => this.goBack());
  }

  goBack(): void {

      this.angulartics2Piwik.eventTrack.next({
          action: 'hero-detail',
          properties: {category: 'hero detail', label: 'back'}
      });
    this.location.back();
  }
}
