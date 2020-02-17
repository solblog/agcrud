import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-crud-update',
  templateUrl: './crud-update.component.html',
  styleUrls: ['./crud-update.component.scss']
})
export class CrudUpdateComponent implements OnInit {

  constructor(private api: FoodService) { }

  ngOnInit() {
  }

}
