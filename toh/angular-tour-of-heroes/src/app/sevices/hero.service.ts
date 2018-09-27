import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return [
      {id: 1, name: 'Monkey D. Luffy'},
      {id: 2, name: 'Roronoa Zoro'},
      {id: 3, name: 'Nami'},
      {id: 4, name: 'Usopp'},
      {id: 5, name: 'Vinsmoke Sanji'},
      {id: 6, name: 'Toni Toni Chopper'},
      {id: 7, name: 'Nico Robin'},
      {id: 8, name: 'Franky'},
      {id: 9, name: 'Brook'}
    ];
  }
}
