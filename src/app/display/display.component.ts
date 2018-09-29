import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  heroes: Hero[];  
  ngOnInit() {
    this.getHeroes();
  }
  selectedHero: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }
}
