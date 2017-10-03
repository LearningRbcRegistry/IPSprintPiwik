import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Angulartics2} from 'angulartics2';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
      private heroService: HeroService,
      private router: Router, private angulartics2: Angulartics2) {
  }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });

    this.pushPiwik(hero,'delete');
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  pushPiwik(hero: Hero,action: String){

    console.log('PUSH PUSH');

    this.angulartics2.eventTrack.next({
      action: 'trackEvent',
      properties: {category: 'hero detail', label: action + '-'+hero.name+'-'+hero.id}
    });

    //this.angulartics2.eventTrack.next({action: '', properties: {'Hero', 'action: '+action + '-'+hero.name+'-'+hero.id});

    console.log('PUSH END');
  }

  onSelect(hero: Hero): void {
    this.pushPiwik(hero,'select');
    this.selectedHero = hero;
  }

  gotoDetail(): void {

    this.pushPiwik(this.selectedHero,'detail');

    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
