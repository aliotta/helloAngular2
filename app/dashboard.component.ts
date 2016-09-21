import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
  providers: []
})

export class DashboardComponent implements OnInit{

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
