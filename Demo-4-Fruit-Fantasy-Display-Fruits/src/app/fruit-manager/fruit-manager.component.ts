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
 
  constructor() { }

  ngOnInit(): void {
  }
 

}
