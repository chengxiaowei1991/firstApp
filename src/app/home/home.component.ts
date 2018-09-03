import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hero = [
    { id:1, name:'gaogao' },
    { id:2, name:'wanlimm' },
    { id:3, name:'ssmay' },
    { id:4, name:'angular '}
  ];
  
}
