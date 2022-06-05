import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/food';
// import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  foods:Foods[]=[];

  constructor(private fs:FoodService ,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      if(params['searchItem'])
      this.foods=this.fs.getAll().filter(food=> food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      this.foods=this.fs.getAllFoodByTag(params['tag'])
      else
      this.foods=this.fs.getAll();
    })
  }

}
