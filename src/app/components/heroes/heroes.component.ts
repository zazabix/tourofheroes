import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/models/hero';
import { HEROES } from 'src/app/models/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() {

  }

  ngOnInit(): void {

    alert('grr');
  }

}
