import { Component, Input } from '@angular/core';
import { Personajes } from '../interfaces/personajes';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{
  @Input() personaje!: Personajes
  constructor() { }

  

}
