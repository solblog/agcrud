import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../dto/food';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud-read-get',
  templateUrl: './crud-read-get.component.html',
  styleUrls: ['./crud-read-get.component.scss']
})
export class CrudReadGetComponent implements OnInit {

  constructor(private api: FoodService) { }

  ngOnInit() {
    this.getProductDetails(this.route.snapshot.params['id']);
  }
  
  food: Food;

  getProductDetails(id) {
    this.api.getFood(id)
      .subscribe(data => {
        this.food = data;
        console.log(this.food);
    });
  }
}
