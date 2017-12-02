import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.css']
})
export class GrandComponent implements OnInit {
  age=25
  name="mana"
  constructor() { }

  ngOnInit() {
  }

  up() {
    this.age = this.age + 1
  }
}
