import { Component, OnInit } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FRUITS } from '../models/fruit-list';

@Component({
  selector: 'app-fruit-manager',
  templateUrl: './fruit-manager.component.html',
  styleUrls: ['./fruit-manager.component.css']
})
export class FruitManagerComponent implements OnInit {
  fruits = FRUITS;
  searchText: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  search() {
    if (this.searchText === '' || !this.searchText)
    this.fruits = FRUITS;
  else {
    this.fruits = FRUITS;
    this.fruits = this.fruits.filter(fruit => fruit.name?.startsWith(this.searchText.toLowerCase()));
  }

  }
  reset() {
    this.searchText = '';
    this.fruits = FRUITS;
  }

}
