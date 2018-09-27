import { Component, OnInit } from '@angular/core';
import {Hero} from '../models/hero';
import { HeroService } from '../sevices/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero[];
  selectedHero: Hero;

  constructor(private heroes: HeroService) { }

  onSelect(h: Hero): void {
    this.selectedHero = h;
  }
  clearSel(): void {
    this.selectedHero = null;
  }
  isSelected(h: Hero): boolean {
    return(this.selectedHero === h);
  }

  getHeroes(): void {
    this.hero = this.heroes.getHeroes();
  }
  ngOnInit() {
    this.getHeroes();
  }

}
