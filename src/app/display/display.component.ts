import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import { HEROES } from '../mock-heroes';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }
  ngOnInit() {
    console.log("Componnet ngoninit")
  }
  selectedHero: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }
}
