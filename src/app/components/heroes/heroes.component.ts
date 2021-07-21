import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/models/hero';
import { HEROES } from 'src/app/models/mock-heroes';

import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(
    private heroService: HeroService,
    private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => { this.heroes = heroes });
  }

}
